import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/models/giphy.model';
import { Trivia } from 'src/app/models/trivia.model';
import { GiphyService } from 'src/app/services/giphy-api.service';
import { TriviaService } from 'src/app/services/trivia-api.service';


@Component({
  selector: 'app-test-count',
  templateUrl: './time-challenge.component.html',
  styleUrls: ['./time-challenge.component.css']
})
export class TimeChallengeComponent implements OnInit {
    giph: Giphy;
    trivia: Trivia;
    timeLeft: number = 60;
    interval;

    giphHint: any;
    randomQuestion: any;
    randomAnswer: any;
    giphArray: any;
    i = 0;
    user_answer: string;
    user_score = 0;
    strikes = 0;

  constructor(private triviaService: TriviaService, private giphyService: GiphyService,) { }

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
          this.startTimer();
        });
    });
  } 
  
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }



  resetButton() {
    clearInterval(this.interval);
    this.timeLeft = 60;
    this.ngOnInit;
  }

 pauseButton() {
  clearInterval(this.interval);
 }

 nextGiphHint() {
  this.i = this.i + 1;
  this.giphHint = this.giphArray[this.i].images.original.url;
    }
  
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
          //stop game & add a pop-up that shows 
          // this.nextQuestion();
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
  
    // gameDisplay(){
    //   this.remove("hidden");
    // }

}



