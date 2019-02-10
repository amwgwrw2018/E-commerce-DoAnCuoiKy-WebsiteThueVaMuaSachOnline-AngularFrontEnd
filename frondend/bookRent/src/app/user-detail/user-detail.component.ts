
import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserInfoServiceService} from '../user-info-service.service';
import{HttpClient,HttpHeaders} from '@angular/common/http';


import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  // @ViewChild('tableReadable') table :any;
  users$: any[] = [];
  dtOptions: DataTables.Settings = {};

value;
userID;

currentUser:any="";
currentPassword;
newPassword;
payInAmount:number;
token;
countBookBought;
BookListByAuthor;
ReadableBookList;
changeEmail;
changeFullname;
changePhoneNumber;
changeAddress;
currentUsername;
isAuthor=false;
  constructor(private cookieService: CookieService,private http:HttpClient,private activatedRoute:ActivatedRoute,private userService:UserInfoServiceService) { }

  ngOnInit() {
if(this.cookieService.get("CurrentUserRole")=="ROLE_AUTHOR"){
this.isAuthor=true;
}

this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
//      setTimeout(function () {
//   $(function () {
//     (<any>$('#AuthorBookList')).DataTable();
//   });
// }, 3000);
          setTimeout(function () {
  $(function () {
   $('#UserReadableBookList').DataTable(

      );
  });
}, 3000);
                    setTimeout(function () {
  $(function () {
   $('#AuthorBookList').DataTable(

      );
  });
}, 3000);
          
//$('#UserReadableBookList').css('background-color','red');

  	this.userID=this.activatedRoute.snapshot.params['id'];
    this.userService.getUserInfo(this.userID).subscribe(
result =>{

 this.currentUser=JSON.parse(result);
 this.changeEmail=this.currentUser.email;
this.changeFullname=this.currentUser.fullName;
this.changePhoneNumber=this.currentUser.phoneNumber;
this.changeAddress=this.currentUser.address;
this.currentUsername=this.currentUser.username;
    this.http.post('http://localhost:8080/DocSachOnline/ChapterUpload/getBookListByAuthor/'+this.currentUser.username,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
 
this.BookListByAuthor=result;
}
  )
;
}
      );

    this.http.post('http://localhost:8080/DocSachOnline/Book/isReadableBookListForUser/'+this.userID,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {

this.ReadableBookList=result;
console.log(this.ReadableBookList);
}
  )
;
}



// this.http.post('http://localhost:8080/DocSachOnline/Book/countBookBought/'+this.userID,
//   {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
// .subscribe(
// result => {
	
// this.countBookBought=result;
// }
//   )
// ;
changeMyProfile(){

var bodyChangeInfo = {
email:this.changeEmail,
fullName:this.changeFullname,
phoneNumber:this.changePhoneNumber,
address:this.changeAddress,
userID:this.userID
};
    this.http.post('http://localhost:8080/DocSachOnline/UserInfo/changeUserProfile',bodyChangeInfo,
  {headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {

this.ReadableBookList=result;
console.log(this.ReadableBookList);
this.ngOnInit();
}
  )
;
  }
  changeAvatar(event){
      let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
   
              this.http.post('http://localhost:8080/DocSachOnline/UserInfo/changeUserAvatar/'+this.userID+"/"+this.currentUsername,formData,
  {headers:new HttpHeaders().set('Accept', 'application/json'),responseType: 'text'})
.subscribe(
result => {

}
  )
;
      
    }


    
  }
  changePassword(){
    var body={
      userID:this.userID,
      currentPassword:btoa(this.currentPassword),
      newPassword:btoa(this.newPassword)
    };
              this.http.post('http://localhost:8080/DocSachOnline/UserInfo/changePassword',body,
  {headers:new HttpHeaders().set('Accept', 'application/json'),responseType: 'text'})
.subscribe(
result => {

}
  )
;
  }
}





