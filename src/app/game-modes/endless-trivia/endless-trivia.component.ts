import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/models/giphy.model';
import { Trivia } from 'src/app/models/trivia.model';
import { GiphyService } from 'src/app/services/giphy-api.service';
import { TriviaService } from 'src/app/services/trivia-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatRippleModule } from '@angular/material/core';
import { PlayerProfileComponent } from 'src/app/player-profile/player-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';

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
    private firebaseService: FirebaseService,
    private dialog: MatDialog
  ) {}

  giphHint: any;
  randomQuestion: any;
  randomAnswer: any;
  giphArray: any;
  i = 0;
  user_answer: string;
  user_score = 0;
  strikes = 0;

  //This is ripple stuff if we want it
  centered = false;
  disabled = false;
  unbounded = true;
  ripple_radius: '100px';
  ripple_color: string;
  event: any;
  sound: string;

  correct_message = false;
  wrong_message = false;

  ngOnInit(): void {
        this.correct_message = false;
        this.wrong_message = false;
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
  }

  nextGiphHint() {
    this.i = this.i + 1;
    this.giphHint = this.giphArray[this.i].images.original.url;
  }

  submitAnswer(event) {
    if (this.randomAnswer.includes(this.user_answer.toLowerCase())) {
      console.log('CORRECT');
      this.addPoint();
      this.nextQuestion();
      this.user_answer = '';
      this.correct_message = true;
      this.delay.subscribe((correct_message) => this.correct_message = false);
    } else {
      console.log('WRONG');
      this.strikes = this.strikes + 1;
      this.wrong_message = true;
      this.delay.subscribe((wrong_message) => this.wrong_message = false);
      if (this.strikes === 3) {
        console.log('Youre out!');
        this.user_answer = '';
        this.nextQuestion();
        this.gameOver();
      }
    }
  }

  delay = timer(1000 * 2);

  nextQuestion() {
<<<<<<< HEAD
    this.delay.subscribe((x) => this.ngOnInit());
    //Should also push user's current score
=======
    this.ngOnInit();
>>>>>>> leaderboard
  }

  addPoint() {
    this.user_score = this.user_score + 1;
  }

  removePoint() {
    this.user_score = this.user_score - 1;
  }

  gameOver() {
    this.firebaseService.updateEndlessScore(this.user_score);
    this.firebaseService.updateGamesPlayed();
<<<<<<< HEAD
    // if (this.user_score > this.high_score) {
    //   this.high_score = this.user_score;
    //   //push?
    //   } else {
    // alert("Did not beat high score")
    //   }
  }
=======
  }

>>>>>>> leaderboard
}
