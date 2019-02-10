import { Component, OnInit } from '@angular/core';
import {GetBookServiceService} from '../get-book-service.service';
import { RouterModule, Routes,ActivatedRoute, Router } from '@angular/router';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {UserInfoServiceService} from '../user-info-service.service';
import {BookTypeServiceService} from '../book-type-service.service';
@Component({
  selector: 'book-detail-for-buying-and-rent',
  templateUrl: './book-detail-for-buying-and-rent.component.html',
  styleUrls: ['./book-detail-for-buying-and-rent.component.css']
})
export class BookDetailForBuyingAndRentComponent implements OnInit {
currentBook;
bookId="";
token="";
bookAuthorInfo;
userID="";
currentUserInfo;
rentPackagedInfo;
bookCommentList;
selectedRentInfo;
ThisBookReadableInfo;
CommentInput;
isLogin=false;
notCommentAny=true;
RecommendBookList;
  constructor(private router: Router,private getBookService:GetBookServiceService,private booktypeService :BookTypeServiceService,private route:ActivatedRoute,private cookieService: CookieService,private userService:UserInfoServiceService, private http:HttpClient) { }

  ngOnInit() {
if( this.cookieService.check('tokenJWT')){
  this.isLogin=true;
}
    this.userID=this.cookieService.get('CurrentUserID');
    this.token= this.cookieService.get('tokenJWT');
  	this.bookId=this.route.snapshot.params['id'];


    this.userService.getUserInfo(this.userID).subscribe(
result =>{

this.currentUserInfo=JSON.parse(result);

}
      );

this.getBookService.getBook(this.bookId).subscribe(
result =>{
	this.currentBook=JSON.parse(result);
  console.log(this.currentBook);
  this.booktypeService.getNewestBookListByBookType(this.currentBook.bookType.bookTypeId,4).subscribe(
result=>{
  this.RecommendBookList=result;
console.log(this.RecommendBookList);
}
  );
}

	);


this.http.post('http://localhost:8080/DocSachOnline/Book/getCommendList/'+this.bookId,this.token,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
  
this.bookCommentList=JSON.parse(result);

 console.log(this.bookCommentList);
}
  )
;

this.http.post('http://localhost:8080/DocSachOnline/Book/getBookAuthor/'+this.bookId,this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
	
this.bookAuthorInfo=JSON.parse(result);


}
	)
;
this.http.post('http://localhost:8080/DocSachOnline/Book/getRentpackageList',this.token,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
  
this.rentPackagedInfo=JSON.parse(result);


}
  )
;

this.http.post('http://localhost:8080/DocSachOnline/Book/isReadableBookForUser/'+this.cookieService.get('CurrentUserID')+'/'+this.bookId,this.token,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {

  
this.ThisBookReadableInfo=JSON.parse(result);


}
  )
;

  }
getRentInfo(e){

this.selectedRentInfo=JSON.parse(e.target.value);
}
addNewTransaction(){


      if(this.cookieService.check("CurrentUserID")){

	var expiredDate = new Date();
	expiredDate.setDate( expiredDate.getDate() + 1 );
	var resultUrl="";
  var body={
    username:this.cookieService.get('CurrentUser'),
    token:this.token,
    bookID:this.currentBook.id,
    rentPackagedID:this.selectedRentInfo.rentPackageID

  }

  this.cookieService.set("CurrentPurchasedBookID",this.currentBook.id,expiredDate,'/');
  this.cookieService.set("CurrentRentPackagedID",this.selectedRentInfo.rentPackageID,expiredDate,'/');
  console.log(this.cookieService.get("CurrentPurchasedBookID"));
    console.log(this.cookieService.get("CurrentRentPackagedID"));
  this.http.post('http://localhost:8080/DocSachOnline/Book/make/payment/'+this.selectedRentInfo.price,"",
  	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'}).subscribe(
result=>{
resultUrl=JSON.parse(result).redirect_url;
window.location.href=resultUrl;
}
  	);


}else{
  this.router.navigate(['/login']);
}
  
}
checkCommentInput(){

  if(this.CommentInput==""){

    this.notCommentAny=true;
  }else{
    this.notCommentAny=false;
  }
}
addComment(){

    this.http.post('http://localhost:8080/DocSachOnline/Book/addComment/'+this.userID+'/'+this.bookId,this.CommentInput,
    {headers:new HttpHeaders().set('Content-Type', 'text/plain;charset=utf-8'),responseType: 'text'}).subscribe(
result=>{
this.ngOnInit();
}
    );

}
}


