import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
// Interceptor use for intercepting the request. we wnat to pass the token with every request. so we use using Interceptor done this.


@Injectable() // so we can any where inject this class
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService){}

    // below is orver rided method of HttpInterceptor Interface 
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
      
  // add the JWT token (from local storage) to request
    let authReq=req;
    console.log("authReq "+authReq+"req "+req);
    const token= this.loginService.getToken();
    if(token != null || token != ''){ 
       authReq=authReq.clone({
            setHeaders:{ Authorization: `Bearer ${token}` },
        }); 
    }
    return next.handle(authReq);
    }

}

// now we need to add this 'authInterceptorProviders' into app.module.ts file.
export const authInterceptorProviders=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true


  }

]