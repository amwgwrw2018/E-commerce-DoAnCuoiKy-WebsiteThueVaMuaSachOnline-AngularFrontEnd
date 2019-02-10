import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageServiceService } from '../language-service.service';
import {BookTypeServiceService} from '../book-type-service.service';
@Component({
  selector: 'author-add-new-book-form',
  templateUrl: './author-add-new-book-form.component.html',
  styleUrls: ['./author-add-new-book-form.component.css']
})
export class AuthorAddNewBookFormComponent implements OnInit {
  bookName;
  bookPrice;
bookTypeList;
languageList;
changeBookInfo_LanguageID;
changeBookInfo_BookType;
formData:FormData = new FormData();
  constructor(private http:HttpClient,
  	private cookieService: CookieService,
  
  	private router: Router,
  	private languageService:LanguageServiceService,
  	private booktypeService :BookTypeServiceService) { }

  ngOnInit() {
  	  this.booktypeService.getBookTypeList().subscribe(
result => {
	
this.bookTypeList=JSON.parse(JSON.stringify(result));
console.log(this.bookTypeList);
}
  	  	);
  	    	  this.languageService.getLanguageList().subscribe(
result => {
	
this.languageList=JSON.parse(JSON.stringify(result));
console.log(this.languageList);
}
  	  	);
  }
getSelectedLanguage(e){
	this.changeBookInfo_LanguageID=e.target.value;

}
getSelectedBookType(e){
  
	this.changeBookInfo_BookType=e.target.value;
  console.log(e.target.value);
}




createNewBook(){

  var body={
bookName:this.bookName,
bookType:this.changeBookInfo_BookType,
languageId:this.changeBookInfo_LanguageID,
price:this.bookPrice,
userID:this.cookieService.get('CurrentUserID')

  };
	        this.http.post("http://localhost:8080/DocSachOnline/Book/addBook", body,
          {headers:new HttpHeaders().set('Accept', 'application/json'),responseType: 'text'})
            .subscribe(
            	result => {
this.router.navigate(['/userDetail',this.cookieService.get('CurrentUserID')]);

            	}
                
            )
          
}
}
