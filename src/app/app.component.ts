import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://jservice.io/api/random')
      .subscribe(data => console.log(data));
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=eXhNdgjlQiPGRXTVpgPL8TKWNTfaToEa&q=Operation&limit=25&offset=0&rating=pg-13&lang=en')
      .subscribe(data => console.log(data));
  }
  
}
