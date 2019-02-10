import { Component, OnInit } from '@angular/core';
import {GetBookServiceService} from '../get-book-service.service';
import { RouterModule, Routes,ActivatedRoute, Router } from '@angular/router';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {BookTypeServiceService} from '../book-type-service.service';
@Component({
  selector: 'book-by-book-type-page',
  templateUrl: './book-by-book-type-page.component.html',
  styleUrls: ['./book-by-book-type-page.component.css']
})
export class BookByBookTypePageComponent implements OnInit {
bookTypeId;
booklist;
  constructor(private route:ActivatedRoute,private cookieService: CookieService,private booktypeService :BookTypeServiceService) { }

  ngOnInit() {
  	this.bookTypeId=this.route.snapshot.params['bookTypeId'];
this.booktypeService.getBookListByBookType(this.bookTypeId).subscribe(
result=>{
	this.booklist=result;
console.log(result);
}
	);
  }
onScroll(){
	
}
}
