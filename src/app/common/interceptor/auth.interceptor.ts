import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IToken } from '../models/model';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const storeToken = localStorage.getItem('token');
    if (!storeToken) return next.handle(req);

    const tokens = JSON.parse(storeToken) as IToken;

    const authRequest = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${tokens.access_token}`
      }
    });
    return next.handle(authRequest);
  }

}