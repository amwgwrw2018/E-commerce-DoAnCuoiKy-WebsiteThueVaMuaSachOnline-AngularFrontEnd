import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserInfoServiceService {
token;
  constructor(private http:HttpClient,private cookieService: CookieService,private route: ActivatedRoute,private router: Router) {}
  getUserInfo(userID){
  	
return this.http.post('http://localhost:8080/DocSachOnline/UserInfo/getUser/'+userID,this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});

}
getUserList(){
	return this.http.post('http://localhost:8080/DocSachOnline/UserInfo/getUserList',this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});
	
  }
}

