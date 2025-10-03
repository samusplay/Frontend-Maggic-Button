import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err) => {
      console.error('[HTTP ERROR]', err.status, err.message, err.error);
      // TODO: mostrar snackbar/toast, redirigir si 401, etc.
      return throwError(() => err);
    })
  );
};
