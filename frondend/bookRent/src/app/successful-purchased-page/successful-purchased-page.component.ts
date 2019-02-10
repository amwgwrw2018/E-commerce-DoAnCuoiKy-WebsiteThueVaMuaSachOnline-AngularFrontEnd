import { Component, OnInit } from '@angular/core';
import {GetBookServiceService} from '../get-book-service.service';
import { RouterModule, Routes,ActivatedRoute, Router } from '@angular/router';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-successful-purchased-page',
  templateUrl: './successful-purchased-page.component.html',
  styleUrls: ['./successful-purchased-page.component.css']
})
export class SuccessfulPurchasedPageComponent implements OnInit {
token;
bookID;
currentUser;
rentPackagedID;
currentBookInfo;
currentRentPackagedInfo;
  constructor(private getBookService:GetBookServiceService,private route:ActivatedRoute,private cookieService: CookieService,   private http:HttpClient) { }

  ngOnInit() {



if(this.cookieService.check("CurrentPurchasedBookID") && this.cookieService.check("CurrentRentPackagedID")){
	 	this.token= this.token= this.cookieService.get('tokenJWT');
	 	this.currentUser=this.cookieService.get('CurrentUser');
  	 this.bookID= this.cookieService.get("CurrentPurchasedBookID");
  this.rentPackagedID=this.cookieService.get("CurrentRentPackagedID");
  	   var body={
    username:this.currentUser,
    token:this.token,
    bookID:this.bookID,
    rentPackagedID:this.rentPackagedID

  }
  	  this.http.post('http://localhost:8080/DocSachOnline/Book/addNewTransation',body,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
  



}
  )
;


this.getBookService.getBook(this.bookID).subscribe(
result=>{
	console.log(result);
this.currentBookInfo=JSON.parse(result);

}
	);

this.http.post('http://localhost:8080/DocSachOnline/Book/getRentpackageById/'+this.rentPackagedID,this.token,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {

this.currentRentPackagedInfo=JSON.parse(result);
  console.log(this.currentRentPackagedInfo);

}
  )
;
  }
 }
  }


