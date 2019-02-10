import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RentAndBoughtCountService {

  constructor(private http:HttpClient,private cookieService: CookieService,private route: ActivatedRoute,private router: Router) { }
}
