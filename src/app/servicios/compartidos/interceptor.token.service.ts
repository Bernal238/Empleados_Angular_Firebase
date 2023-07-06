import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements HttpInterceptor {

  constructor(private router:Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if(token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(cloned);
    }

    if(this.router.url === '/menu'){
      localStorage.clear();
      this.router.navigate(['']);
    }
    return next.handle(request);
  }
}
