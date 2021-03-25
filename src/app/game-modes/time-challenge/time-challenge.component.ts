import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/models/giphy.model';
import { Trivia } from 'src/app/models/trivia.model';
import { GiphyService } from 'src/app/services/giphy-api.service';
import { TriviaService } from 'src/app/services/trivia-api.service';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-test-count',
  templateUrl: './time-challenge.component.html',
  styleUrls: ['./time-challenge.component.css'],
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
  high_score = 0;
  strikes = 0;

  centered = false;
  disabled = false;
  unbounded = false;

  ripple_radius: '100px';
  ripple_color: 'red';

  delay = timer(1000 * 0.75);

  correct_message = false;
  wrong_message = false;

  constructor(
    private triviaService: TriviaService,
    private giphyService: GiphyService,
    private _location: Location,
    public routes: RouterModule,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.correct_message = false;
    this.wrong_message = false;
    this.triviaService.fetchRandomQuestion().subscribe((result) => {
      this.randomAnswer = result[0].answer.toLowerCase();
      this.randomQuestion = result[0].question;

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
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } 
    }, 1000);
  }

  resetButton() {
    clearInterval(this.interval);
    this.timeLeft = 60;
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
    if (this.randomAnswer.includes(this.user_answer.toLowerCase())) {
      this.addPoint();
      this.nextQuestion();
      this.user_answer = '';
      this.correct_message = true;
      this.delay.subscribe((correct_message) => (this.correct_message = false));
    } else {
      this.wrong_message = true;
      this.delay.subscribe((wrong_message) => (this.wrong_message = false));
      this.strikes = this.strikes + 1;
      if (this.strikes === 3) {
        this.nextQuestion();
        this.strikes = 0;
      }
    }
  }

  nextQuestion() {
    this.delay.subscribe((x) => this.ngOnInit());
  }

  addPoint() {
    this.user_score = this.user_score + 1;
  }

  homeClick() {
    this.router.navigateByUrl('/home');
  }
}
