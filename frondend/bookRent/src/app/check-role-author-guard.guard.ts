import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class CheckRoleAuthorGuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private cookieService:CookieService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
  		
  		if(this.cookieService.check('CurrentUserRole') && this.cookieService.get('CurrentUserRole')=='ROLE_AUTHOR'){
  			return true;
  		}
  			console.log(state.url);
  			this.router.navigate([this.router.url,'inaccessiblePage']);
  			return false;
  			
  			
  		
  	
  // this.router.navigate(['signUp']);
  // return false;
  }

}