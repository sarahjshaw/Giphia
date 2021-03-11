import { ɵNullViewportScroller } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
// import * as EventEmitter from 'node:events';
import { Giphy } from 'src/app/models/giphy.model';
import { Trivia } from 'src/app/models/trivia.model';
import { GiphyService } from 'src/app/services/giphy-api.service';
import { TriviaService } from 'src/app/services/trivia-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';


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
    private triviaService: TriviaService,
    private firebaseService: FirebaseService
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
          this.giphArray = result.data;
          this.giphHint = this.giphArray[this.i].images.original.url;
        });
    });
    // this.firebaseService.updateEndlessScore(this.user_score)
  }

  nextGiphHint() {
this.i = this.i + 1;
this.giphHint = this.giphArray[this.i].images.original.url;
  }

  submitAnswer() {
    if (this.randomAnswer != this.user_answer.toLowerCase()) {
      console.log('WRONG');
      alert("Wrong!");
      this.strikes = this.strikes + 1;
      if (this.strikes === 3) {
        console.log('Youre out!');
        this.user_answer = '';
        this.nextQuestion();
        this.gameOver();
      }
    } else {
      console.log('CORRECT');
      alert("Correct!");
      this.addPoint();
      this.nextQuestion();
      this.user_answer = '';
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

  gameOver() {
    this.firebaseService.updateEndlessScore(this.user_score)
// if (this.user_score > this.high_score) {
//   this.high_score = this.user_score;
//   //push?
//   } else {
// alert("Did not beat high score")
//   }
}
}
