import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/models/giphy.model';
import { Trivia } from 'src/app/models/trivia.model';
import { GiphyService } from 'src/app/services/giphy-api.service';
import { TriviaService } from 'src/app/services/trivia-api.service';


@Component({
  selector: 'app-endless-trivia',
  templateUrl: './endless-trivia.component.html',
  styleUrls: ['./endless-trivia.component.css']
})

export class EndlessTriviaComponent  {

  giph: Giphy;
  trivia: Trivia;

  constructor(private giphyService: GiphyService, 
              private triviaService: TriviaService) { }
  
// ~sarah~
randomQuestion:any;
giphHint:any;
answer: string;

ngOnInIt() {
  this.triviaService.fetchRandomQuestion().subscribe((result)=>{
    console.log("result", result)
    this.randomQuestion = result
    this.randomQuestion.answer = answer
  })
}



getGiphHint(randomQuestion) {
  this.giphyService.fetchGiph().subscribe((giph)=>{
    console.log("giph", giph)
this.giphHint = giph
  })
}
}
