import { Component, OnInit } from '@angular/core';
import{user} from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";
import {UserInfoServiceService} from '../user-info-service.service';
import {TopMenuBarComponent} from "../top-menu-bar/top-menu-bar.component";
@Component({
	providers:[TopMenuBarComponent],
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
canLogin=true;
isLoginFail="none";
loginFailMessage="";
_user: user={
username:"",
password:""

};

  constructor(private UserInfoServiceService:UserInfoServiceService,private http:HttpClient,private cookieService: CookieService,private router: Router,private topmenu:TopMenuBarComponent) { }

  ngOnInit() {

  	 	}
 login(){

 		 var bodys={
username:this._user.username,
password:btoa(this._user.password)

 };
 console.log(btoa(this._user.password));
 var body = 'username='+this._user.username+'&password='+btoa(this._user.password)+'&remember-me=yes';
  
    this.http.post("http://localhost:8080/DocSachOnline/Auth/login",
      body,
      {headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),responseType: 'text'})
.subscribe(

 (data) => {
console.log(data);
alert('thanh cong');

   this.cookieService.set( 'tokenJWT',JSON.parse(data).token);
this.cookieService.set('CurrentUserID',JSON.parse(data).userid);
this.cookieService.set('CurrentUser',this._user.username);
this.cookieService.set('CurrentUserRole',JSON.parse(data).role1);
this.isLoginFail="true";
  window.location.href="http://localhost:4200/";


 },
   (error)=>{
  this.loginFailMessage="Login fail! please check your username or password";
   }
)




  
 }


}
