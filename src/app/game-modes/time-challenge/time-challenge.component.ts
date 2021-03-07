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
  constructor() { }

  ngOnInit(): void {
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
    clearTimeout(this.interval);
  }
 pauseButton() {
  clearInterval(this.interval);
 }

}

