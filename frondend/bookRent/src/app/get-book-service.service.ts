import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GetBookServiceService {
token;
  constructor(private http:HttpClient,private cookieService: CookieService,private route: ActivatedRoute,private router: Router) { }
getBookList(){

return this.http.post('http://localhost:8080/DocSachOnline/Book/getBook',this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});

}
getBook(bookId){

return this.http.post('http://localhost:8080/DocSachOnline/Book/getBook/'+bookId,this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});

}

}
