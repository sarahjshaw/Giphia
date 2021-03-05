import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/models/giphy.model';
import { Trivia } from 'src/app/models/trivia.model';
import { GiphyService } from 'src/app/services/giphy-api.service';
import { TriviaService } from 'src/app/services/trivia-api.service';

@Component({
  selector: 'app-endless-trivia',
  templateUrl: './endless-trivia.component.html',
  styleUrls: ['./endless-trivia.component.css'],
})
export class EndlessTriviaComponent implements OnInit {
  giph: Giphy;
  trivia: Trivia;

  constructor(
    private giphyService: GiphyService,
    private triviaService: TriviaService
  ) {}

  giphHint: any;
  qQuestion: string;
  qAnswer: string;
  randomQuestion: any;
  randomAnswer: any;
  giphArray: any;
  i = 0;
  newGiphHint: any;

  ngOnInit(): void {
    this.triviaService.fetchRandomQuestion().subscribe((result) => {
      this.randomAnswer = result[0].answer;
      this.randomQuestion = result[0].question;
      console.log('randomAnswer', this.randomAnswer);
      console.log('randomQuestion', this.randomQuestion);

      this.giphyService.fetchGiph(this.randomAnswer).subscribe((result) => {
        this.giphHint = result[0];
        result = this.giphArray;
        console.log('giphHint', this.giphHint);
        console.log('giphArray', this.giphArray);
      });
    });
  }

  //TODO

  //nextGiphHint function
  //scroll through available gifs in returned randomAnswer array result[0]
  //did we kneecap ourselves by having it set to the 0th index in ngOnInIt rahter that grabbing the array and 0ing below?

  nextGiphHint(giphArray) {
    this.i + 1;
    this.i = this.i % Array.length; //SHOULD restart if gone over the array length
    giphArray[this.i] = this.newGiphHint; //if this works, let's change this to the 'giphHint'
  }

  //submit function
  //ngIf? User input =(is there a way to do 'similar?') randomAnswer
  //right or wrong answer, right > Show NEXT button, re-run ngOnInIt funcitons, wrong > new hint? / give up? / something else

  nextQuestion() {
    this.ngOnInit();
  }

}