import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookTypeServiceService {

  constructor(private http:HttpClient) { }
  getBookTypeList(){

	return this.http.post("http://localhost:8080/DocSachOnline/Book/getBookTypeList",
		{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});

;
}
getBookListByBookType(bookTypeId){
		return this.http.post("http://localhost:8080/DocSachOnline/Book/getBookListByBookType/"+bookTypeId,
		{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});

;
}
getNewestBookListByBookType(bookTypeId,numberOfBook){
			return this.http.post("http://localhost:8080/DocSachOnline/Book/getNewestBookListByBookType/"+bookTypeId+"/"+numberOfBook,
		{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});

;
}
}
