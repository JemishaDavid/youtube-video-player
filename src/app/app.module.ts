import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  declarations: [
   
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class AppModule { }
