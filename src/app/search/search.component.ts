import { Component } from '@angular/core';
import { SearchService } from "../search.service";
import { YouTubePlayer } from "@angular/youtube-player";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent { 
foundResult:any[]=[];
constructor(private service:SearchService){}
displayResult(query:string){
  this.service.displayResult(query).subscribe(
    data => {
      this.foundResult = data.items;
      console.log(data.items);
    },
    error => {
      console.log(error);
    });
    
} 

}
