import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AuthOidcService } from '../services/auth-oidc.service';
import { environment } from '../../environments/environment';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthOidcService);
  
  // Check if the request is to our backend API
  if (req.url.includes(environment.backendUrl)) {
    return authService.getAccessToken().pipe(
      switchMap(token => {
        if (token) {
          // Clone the request and add the authorization header
          const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
          });
          console.log('Adding token to request:', req.url);
          return next(authReq);
        }
        console.log('No token available for request:', req.url);
        return next(req);
      })
    );
  }
  
  return next(req);
};
