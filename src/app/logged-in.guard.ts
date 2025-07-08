import {CanActivateFn, Router} from '@angular/router';
import {Authentication} from "./authentication";
import {inject} from '@angular/core';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(Authentication);
  const router= inject(Router);

  // return  this.authService.isLoggedIn();
  if (authService.isLoggedIn()) {return true; }
  authService.redirectUrl = state.url;
  router.navigate(['./login']).then(() => {});
  return false;
};
