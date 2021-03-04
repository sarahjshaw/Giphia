import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GiphyService {


    constructor(private http: HttpClient) {}

fetchGiph() {
        return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=eXhNdgjlQiPGRXTVpgPL8TKWNTfaToEa&q=&limit=5&offset=0&rating=pg-13&lang=en');
    }
//set gif limit to 5 rather than 25 results
};