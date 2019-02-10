import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import {GetBookServiceService} from '../get-book-service.service';
import * as $ from 'jquery';
import 'owl.carousel';
@Component({
  selector: 'book-carousel1',
  templateUrl: './book-carousel1.component.html',
  styleUrls: ['./book-carousel1.component.css']
})
export class BookCarousel1Component implements OnInit {
	bookList;
images=[];
  constructor(private getBookService:GetBookServiceService) { }

  ngOnInit() {
this.getBookService.getBookList().subscribe(
result=>{
	this.bookList=JSON.parse(result);
	for (var i = 0; i <JSON.parse(result).length; i++) {
		this.images.push('assets/images/'+JSON.parse(result)[i].bookImage);
	}
}

	);


   

  

         	
             
  

             
           
  }

}
