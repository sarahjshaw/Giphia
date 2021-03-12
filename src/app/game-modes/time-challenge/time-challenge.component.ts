import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/models/giphy.model';
import { Trivia } from 'src/app/models/trivia.model';
import { GiphyService } from 'src/app/services/giphy-api.service';
import { TriviaService } from 'src/app/services/trivia-api.service';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


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
    high_score = 0;

  constructor(private triviaService: TriviaService, 
    private giphyService: GiphyService,
    private _location: Location,
    public routes: RouterModule,
    private router: Router
    ) { }

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
        this.gameOver();
       } //else {
      //   this.timeLeft = 60; //commented this out to prevent endless looping
      // }
    },1000)
  }

resetButton() {
    clearInterval(this.interval);
    this.timeLeft = 60;
    // this.ngOnInit;
    this.startTimer();
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
        alert("Wrong!"); //alert works better than the popup
        //sound?
        // setTimeout(() => {     this popup works but is to slow
        //   this.toggleShowFalse() 
        // }, 20000);
        this.strikes = this.strikes + 1;
        if (this.strikes === 3) {
          console.log('Youre out!');
          this.user_answer = ''; 
          this.strikes = 0;
          this.nextQuestion();
          // this.timeLeft = 0; //cw - if third strike than the timer is equal to 0?
          // clearInterval(this.interval);//cw - clear the timer when wrong?
        }
        
      } else {
        console.log('CORRECT');
        //you did it message
        // setTimeout(() => {     this popup works but is to slow
        //   this.toggleShowTrue() 
        // }, 800);
        this.addPoint();
        alert("Correct!");//alert works better than the popup
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
  
    homeClick(){
    this.router.navigateByUrl('/home');
  }
 
  isShownWrong: boolean = false;
  isShownTrue: boolean = false;

  
 toggleShowFalse(){
   this.isShownWrong = !this.isShownWrong;
 }

 toggleShowTrue(){
  this.isShownTrue = !this.isShownTrue;
}

gameOver() {

    }
  }


