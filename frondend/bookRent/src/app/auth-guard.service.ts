import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private cookieService:CookieService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  	if(this.cookieService.check('CurrentUserRole')){
  		if(this.cookieService.get('CurrentUserRole')=='ROLE_AUTHOR'){
  			return true;
  		}
  	}
  this.router.navigate(['signUp']);
  return false;
  }

}