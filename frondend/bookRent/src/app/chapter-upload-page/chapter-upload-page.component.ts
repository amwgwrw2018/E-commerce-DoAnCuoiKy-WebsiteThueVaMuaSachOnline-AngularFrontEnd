import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageServiceService } from '../language-service.service';
import {BookTypeServiceService} from '../book-type-service.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-chapter-upload-page',
  templateUrl: './chapter-upload-page.component.html',
  styleUrls: ['./chapter-upload-page.component.css']
})
export class ChapterUploadPageComponent implements OnInit {

  constructor(private http:HttpClient,
  	private cookieService: CookieService,
  	private route: ActivatedRoute,
  	private router: Router,
  	private languageService:LanguageServiceService,
  	private booktypeService :BookTypeServiceService) { }
dataTable: any;
bookId:any="";
bookInfo:any="";
bookImage:any="";
token:any="";
currentBookChapterUploadHistory:any="";
languageList:any="";
selectedLanguage:any="";
bookTypeList:any="";
changeBookInfo_BookName;
changeBookInfo_Price;
changeBookInfo_BookType;
changeBookInfo_LanguageID;
newChapterNumber;
ChapterAlreadyExist=null;
formData:FormData = new FormData();
  ngOnInit() {
  
   
 setTimeout(function () {
  $(function () {
    (<any>$('#chapterUploadHistoryTable')).DataTable();
  });
}, 3000);
  
this.languageService.getLanguageList().subscribe(
result => {
	
this.languageList=JSON.parse(JSON.stringify(result));
}
	);

this.booktypeService.getBookTypeList().subscribe(
result => {
	
this.bookTypeList=JSON.parse(JSON.stringify(result));
}
	);

 
  	this.bookId=this.route.snapshot.params['id'];


this.http.post('http://localhost:8080/DocSachOnline/Book/getBook/'+this.bookId,this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
	
this.bookInfo=JSON.parse(result);

this.bookImage=this.bookInfo.bookImage;
this.changeBookInfo_BookName=this.bookInfo.bookName;
this.changeBookInfo_Price=this.bookInfo.price;
}
	)
;

this.http.post('http://localhost:8080/DocSachOnline/ChapterUpload/getAllChapterUploadHistory/'+this.bookId,this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {

this.currentBookChapterUploadHistory=JSON.parse(result);
if(this.currentBookChapterUploadHistory.length>0){

	var maxChapterNumber=0;
	for(var i=0;i<this.currentBookChapterUploadHistory.length;i++){
		if(maxChapterNumber<this.currentBookChapterUploadHistory[i].numberOfChapter){
			maxChapterNumber=this.currentBookChapterUploadHistory[i].numberOfChapter;
		}
	}
	maxChapterNumber=Number(maxChapterNumber);
	 this.newChapterNumber=maxChapterNumber+1;
	 
}else{
	this.newChapterNumber=1;
}

}
	)
;


  }
fileChange(event) {

    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
    
      
        this.http.post("http://localhost:8080/DocSachOnline/Book/changeBookImage/"+this.bookId, formData,
          {headers:new HttpHeaders().set('Accept', 'application/json'),responseType: 'text'})
            .subscribe(
            	result => {


            	}
                
            )
    }
}

addNewChapter(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];

       this.formData.append('uploadFile', file, file.name);
    
      

    }
}

saveNewChapter(){
	        this.http.post("http://localhost:8080/DocSachOnline/ChapterUpload/uploadChapter/"+this.bookId+"/"+this.newChapterNumber, this.formData,
          {headers:new HttpHeaders().set('Accept', 'application/json'),responseType: 'text'})
            .subscribe(
            	result => {
   this.ngOnInit();

            	}
                
            )
         
}

saveBookInfo(){
	alert('sadsd');
}
getSelectedLanguage(e){
	this.changeBookInfo_LanguageID=e.target.value;

}
getSelectedBookType(e){
	this.changeBookInfo_BookType=e.target.value;

}
changeBookInfoSave(){
	  this.http.post(
	  	"http://localhost:8080/DocSachOnline/Book/changeBookInfo/"+this.bookId+"/"+
	  	this.changeBookInfo_BookName+"/"+this.changeBookInfo_BookType+"/"+this.changeBookInfo_LanguageID+"/"+this.changeBookInfo_Price,
          {headers:new HttpHeaders().set('Accept', 'application/json'),responseType: 'text'})
            .subscribe(
        	result => {
location.reload();

            	}
                
            )
}
deleteChapter(chapterNumber,bookID,numberOfChapter){
	  this.http.post(
	  	"http://localhost:8080/DocSachOnline/ChapterUpload/deleteChapter/"+chapterNumber+"/"+bookID+"/"+numberOfChapter,
          {headers:new HttpHeaders().set('Accept', 'application/json'),responseType: 'text'})
            .subscribe(
        	result => {
  this.ngOnInit();

            	}
                
            )

}
checkChapterNumberExist(){
	this.ChapterAlreadyExist=null;
	this.http.post('http://localhost:8080/DocSachOnline/ChapterUpload/getAllChapterUploadHistory/'+this.bookId,this.token,
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {

this.currentBookChapterUploadHistory=JSON.parse(result);
if(this.currentBookChapterUploadHistory.length>0){


	for(var i=0;i<this.currentBookChapterUploadHistory.length;i++){
		if(this.newChapterNumber==this.currentBookChapterUploadHistory[i].numberOfChapter){
			this.ChapterAlreadyExist='';
		}
	}
	
	
}

}
	)
;

}
}
