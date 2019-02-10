import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import {GetBookServiceService} from '../get-book-service.service';
import{HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
bookName='';
token;
bookList;
  constructor( private http:HttpClient) { }

  ngOnInit() {

  }
  searchBook(){
  	if(this.bookName==null){
  		this.bookName="";
  	}

  	  	this.http.post('http://localhost:8080/DocSachOnline/Book/ListBookByNameLike/'+this.bookName,this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
	
this.bookList=JSON.parse(result);
console.log(this.bookList);

}
	)
;
  }

}
