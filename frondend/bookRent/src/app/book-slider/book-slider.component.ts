import { Component, OnInit } from '@angular/core';
import {GetBookServiceService} from '../get-book-service.service';
import { RouterModule, Routes,ActivatedRoute, Router } from '@angular/router';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {BookTypeServiceService} from '../book-type-service.service';
@Component({
  selector: 'book-slider',
  templateUrl: './book-slider.component.html',
  styleUrls: ['./book-slider.component.css']
})
export class BookSliderComponent implements OnInit {
booklist;
booklist2;
booklist3;
  constructor(private cookieService: CookieService,private booktypeService :BookTypeServiceService) { }

  ngOnInit() {

this.booktypeService.getNewestBookListByBookType(1,8).subscribe(
result=>{
	this.booklist=result;

}
	);

this.booktypeService.getNewestBookListByBookType(2,8).subscribe(
result=>{
	this.booklist2=result;

}
	);

this.booktypeService.getNewestBookListByBookType(3,8).subscribe(
result=>{
  this.booklist3=result;

}
  );

  }

}
