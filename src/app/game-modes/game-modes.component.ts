import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-game-modes',
  templateUrl: './game-modes.component.html',
  styleUrls: ['./game-modes.component.css']
})
export class GameModesComponent implements OnInit {

  constructor(private router: Router) { }

  endlessTriviaGame(){
    this.router.navigateByUrl('/endless-trivia');
  };

  timeChallengeGame(){
    this.router.navigateByUrl('/time-challenge');
  };

  ngOnInit(): void {
  }

}
