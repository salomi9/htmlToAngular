import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getDemo(): Observable<any> {
   return this.http.get<any>(this.apiUrl+"/demo")
  }

  postDemo(params: Object): Observable<any>{
  
    return this.http.post<any>(this.apiUrl+"/demoPost", params , httpOptions)
  }
 
}
