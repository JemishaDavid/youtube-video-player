import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private http:HttpClient) {}
  displayResult(query: string):Observable<any>{
    // return this.http.get("https://jsonplaceholder.typicode.com/todos"); 
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDzoOLOK1LLp6KGWC0JCFLG_ZLJLHqL8Bs&maxResults=50&type=video&q='+query);
  }


}
