import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Trivia } from 'src/app/models/trivia.model'

@Injectable({
    providedIn: 'root'
})
export class TriviaService {

    apiKey = 'eXhNdgjlQiPGRXTVpgPL8TKWNTfaToEa';

randomQuestion: Trivia[];

    constructor(private http: HttpClient) {}

    fetchRandomQuestion() {
      console.log('https://jservice.io/api/random')
        return this.http.get('https://jservice.io/api/random');
    }
}
