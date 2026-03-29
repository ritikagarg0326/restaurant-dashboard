import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const required = route.data?.['role'];
  if (!required || auth.role === required || auth.role === 'admin') return true;
  router.navigate([auth.role === 'admin' ? '/admin' : '/manager']);
  return false;
};
