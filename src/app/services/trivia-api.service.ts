import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Trivia } from 'src/app/models/trivia.model'

@Injectable({
    providedIn: 'root'
})
export class TriviaService {

    apiKey = 'eXhNdgjlQiPGRXTVpgPL8TKWNTfaToEa';

    constructor(private http: HttpClient) {}

    fetchRandomQuestion() {
        return this.http.get('http://jservice.io/api/random');
    }
}