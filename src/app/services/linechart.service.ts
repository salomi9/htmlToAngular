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
export class LinechartService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  lineChart(params: Object): Observable<any>{
  
    return this.http.post<any>(this.apiUrl+"/harmonics", params , httpOptions)
  }
}
