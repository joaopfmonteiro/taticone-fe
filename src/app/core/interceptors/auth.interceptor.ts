import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorage } from '../storage/token.storage';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenStorage).get();
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authReq);
};