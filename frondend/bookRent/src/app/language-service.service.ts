import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {
result;
  constructor(private http:HttpClient) { }

getLanguageList(){

	return this.http.post("http://localhost:8080/DocSachOnline/Book/getLanguageList",
		{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});


}
getLanguageById(id){
	return this.http.post("http://localhost:8080/DocSachOnline/Book/getLanguageById/"+id,
		{headers:new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'});
}
}
