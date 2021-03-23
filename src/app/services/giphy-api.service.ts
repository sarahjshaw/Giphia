import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  constructor(private http: HttpClient) {}

  apiKey: string = 'eXhNdgjlQiPGRXTVpgPL8TKWNTfaToEa';

  fetchGiph(qAnswer: string) {
    return this.http.get('https://api.giphy.com/v1/gifs/search?', {
      params: { api_key: this.apiKey, q: qAnswer, rating: 'pg13', lang: 'en' },
    });
  }
}
