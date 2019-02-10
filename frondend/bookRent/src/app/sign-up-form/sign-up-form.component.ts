import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";
import {UserInfoServiceService} from '../user-info-service.service';
@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
isAccept:boolean=false;
disableButton:boolean=false;
username="";
password="";
email="";
role="ROLE_USER";
isAuthor:boolean=false;
formData:FormData = new FormData();
authorName;
authorInfo;
authorDescription;
fullName="";
phoneNumber="";
address="";
phoneNumberFail="none";
fullNameFail="none";
usernameFail="none";
passwordFail="none";
emailFail="none";
userList;
userExistError="none";
canSignUp=false;
  constructor(private UserInfoServiceService:UserInfoServiceService,private http:HttpClient,private router: Router) { }

  ngOnInit() {
  	  	 		this.UserInfoServiceService.getUserList().subscribe(
result=>{
	this.userList=JSON.parse(result);
}
  
);
  	if(this.isAccept==false){
		this.disableButton=true;
	}
  }
change(){
	this.isAccept=!this.isAccept;
	if(this.isAccept==false){
		this.disableButton=true;
	}else{
		this.disableButton=false;
	}
	console.log(this.isAccept);
}

getSelectedValue(e){

this.role=e.target.value;
console.log(this.role);
if(this.role=="ROLE_AUTHOR"){
	this.isAuthor=true;
}else{
	this.isAuthor=false;
}
}
// selectAvatar(event) {
//     let fileList: FileList = event.target.files;
//     if(fileList.length > 0) {
//         let file: File = fileList[0];
    
     
//         this.formData.append('uploadFile', file, file.name);
    
      
//         // this.http.post("http://localhost:8080/DocSachOnline/Book/changeBookImage/"+this.bookId, formData,
//         //   {headers:new HttpHeaders().set('Accept', 'application/json'),responseType: 'text'})
//         //     .subscribe(
//         //     	result => {


//         //     	}
                
//         //     )
//     }
// }
signUp(){
	var body={
username:this.username,
password:this.password,
email:this.email,
role:this.role,
authorName:this.authorName,
authorInfo:this.authorInfo,
authorDescription:this.authorDescription,
fullname:this.fullName,
phoneNumber:this.phoneNumber,
address:this.address,
isAuthor:this.isAuthor
	};
	
	this.http.post('http://localhost:8080/DocSachOnline/Auth/signUp',JSON.stringify(body),
	{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
.subscribe(
result => {
	alert('success');
this.router.navigate(['/login']);


}
	)
;


}
checkUsernameField(){

 	 		if(this.username==""){
this.usernameFail='block';
 		}else{
 			this.usernameFail='none';
 		}
 		for (var i = 0;i<this.userList.length;i++) {
	if(this.username==this.userList[i].username){
this.userExistError='block';
break;
	}
}
}
checkPasswordField(){
	 		if(this.password==""){
this.passwordFail='block';
 		}else{
 			this.passwordFail='none';
 		}
}
checkPhoneNameField(){
	 		if(this.phoneNumber==""){
this.phoneNumberFail='block';
 		}else{
 			this.phoneNumberFail='none';
 		}
}
checkFullNameField(){
	 		if(this.fullName==""){
this.fullNameFail='block';
 		}else{
 			this.fullNameFail='none';
 		}
}
checkEmailField(){
		 		if(this.email==""){
this.emailFail='block';
 		}else{
 			this.emailFail='none';
 		}
}
 checkRequired(){
 	this.userExistError='none';
var reg="[^0-9]*";
if(this.username.match(reg)){
	console.log('match');
}
this.checkUsernameField();
this.checkPasswordField();
this.checkEmailField();
this.checkPhoneNameField();
this.checkFullNameField();




 			


 		if(this.username!="" && this.password!="" && this.userExistError=='none'){
	this.canSignUp=true;
}else{
	this.canSignUp=false;
}
 }
}
