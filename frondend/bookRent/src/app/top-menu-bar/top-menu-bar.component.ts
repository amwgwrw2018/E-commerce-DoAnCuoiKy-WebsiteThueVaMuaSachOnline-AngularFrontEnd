import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'top-menu-bar',
  templateUrl: './top-menu-bar.component.html',
  styleUrls: ['./top-menu-bar.component.css']
})
export class TopMenuBarComponent implements OnInit {
isLogin:boolean=false;
currentUser;
currentUserID;
isAuthor:boolean=false;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
      
    if(this.cookieService.check('CurrentUserID')){
     this.currentUserID= this.cookieService.get('CurrentUserID');
    }
  	if(this.cookieService.check('tokenJWT')){
  		this.currentUser=this.cookieService.get('CurrentUser');
this.isLogin=true;
  	}
    if(this.cookieService.get('CurrentUserRole')=="ROLE_AUTHOR"){
this.isAuthor=true;
    }else{
      this.isAuthor=false;
    }
  }

 logout(){
  	this.cookieService.delete('tokenJWT');
  	this.cookieService.delete('CurrentUser');
  	this.cookieService.delete('CurrentUserRole');
    this.cookieService.delete('CurrentUserID');
  }
}
