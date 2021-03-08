import { ɵNullViewportScroller } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'node:events';
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
  randomQuestion: any;
  randomAnswer: any;
  giphArray: any;
  i = 0;
  user_answer: string;
  user_score = 0;
  strikes = 0;

  ngOnInit(): void {
    this.triviaService.fetchRandomQuestion().subscribe((result) => {
      this.randomAnswer = result[0].answer.toLowerCase();
      this.randomQuestion = result[0].question;
      console.log('randomAnswer', this.randomAnswer);
      console.log('randomQuestion', this.randomQuestion);

      this.giphyService
        .fetchGiph(this.randomAnswer)
        .subscribe((result: any) => {
          // console.log('result', result);
          // this.giphArray = data.data;
          this.giphArray = result.data;
          // console.log('testing', this.giphArray);
          this.giphHint = this.giphArray[this.i].images.original.url;
          // console.log('testing123', this.giphHint);
        });
    });
  }


  //TODO

  //nextGiphHint function
  //scroll through available gifs in returned randomAnswer array result[0]
  //did we kneecap ourselves by having it set to the 0th index in ngOnInIt rahter that grabbing the array and 0ing below?

  nextGiphHint() {
this.i = this.i +1;
this.giphHint = this.giphArray[this.i].images.original.url;
//WORKS BUT NEEDS TO BE ABLE TO PUSH TO HTML ~ Help
  }

  //Push user highscore/game/question count to database

  submitAnswer() {
    if (this.randomAnswer != this.user_answer.toLowerCase()) {
      console.log('WRONG');
      //sound?
      this.strikes = this.strikes + 1;
      if (this.strikes === 3) {
        console.log('Youre out!');
        this.removePoint();
        this.user_answer = '';
        this.strikes = 0;
        this.nextQuestion();
        ///Is this too harsh?
      }
    } else {
      console.log('CORRECT');
      //you did it message
      this.addPoint();
      this.nextQuestion();
      this.user_answer = '';
      this.strikes = 0;
    }
  }

  nextQuestion() {
    this.ngOnInit();
    //Should also push user's current score 
  }

  addPoint() {
    this.user_score = this.user_score + 1;
  }

  removePoint() {
    this.user_score = this.user_score - 1;
  }
}
