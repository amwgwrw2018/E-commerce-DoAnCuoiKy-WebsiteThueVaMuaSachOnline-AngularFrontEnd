import { Component, OnInit,HostListener } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import {GetBookServiceService} from '../get-book-service.service';
import {LanguageServiceService} from '../language-service.service';
@Component({
  providers:[GetBookServiceService],
  selector: 'book-detail',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.css']
})
export class BookDetailPageComponent implements OnInit {
bookInfo;
bookImage;
currentChapterContent;
numberOfChapter:number;
token;
bookId;
bookAuthorInfo;
soChap;
bookLanguage;
ReadableBookList;
chapterNumberList;
readableForThisUser=false;
  constructor(private langService:LanguageServiceService,
    private getBookService:GetBookServiceService,
    private http:HttpClient,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
this.bookId=this.route.snapshot.params['id'];
      this.http.post("http://localhost:8080/DocSachOnline/ChapterUpload/getBookChapterNumberByBook/"+this.bookId,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {

this.chapterNumberList=result;
this.chapterNumberList.sort();
}
  )
;

this.readableForThisUser=false;




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


if(this.cookieService.check('CurrentUserID')){
      this.http.post('http://localhost:8080/DocSachOnline/Book/isReadableBookListForUser/'+this.cookieService.get('CurrentUserID'),
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {

this.ReadableBookList=result;
for(var i=0;i<this.ReadableBookList.length;i++){
  if(this.bookId==this.ReadableBookList[i][4]){
    this.readableForThisUser=true;
    break;
  }

}
}
  )
;
}

if(true){
	//this.cookieService.check('tokenJWT')
this.token=this.cookieService.get('tokenJWT');


this.http.post('http://localhost:8080/DocSachOnline/Book/getBookAuthor/'+this.bookId,this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
	
this.bookAuthorInfo=JSON.parse(result);
console.log(this.bookAuthorInfo);

}
	)
;

this.getBookService.getBook(this.bookId)
.subscribe(
result => {

this.bookInfo=JSON.parse(result);
console.log(this.bookInfo);
this.bookImage=this.bookInfo.bookImage;
this.bookLanguage=this.bookInfo.languageId.language;
}
	)
;

this.http.post('http://localhost:8080/DocSachOnline/Book/getBookChapterCount/'+this.bookId,
{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'}
	)
.subscribe(
result => {
this.numberOfChapter=JSON.parse(JSON.stringify(result));

}
);
}
  }
  getChapterContent(bookId:String,chapterNumber:String){
  	this.http.get('http://localhost:8080/DocSachOnline/Book/getBookChapter/'+bookId+"/"+chapterNumber,
  		{headers:new HttpHeaders().set('Content-Type', 'text/plain'),responseType: 'text'})
.subscribe(
result => {
	this.currentChapterContent=result;
	


}
	)
;


  }
counter() {
    return new Array(this.numberOfChapter);
  }
  onChange(e){
this.getChapterContent(this.bookId,e);
  }
@HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {

    }
}

