import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-game-modes',
  templateUrl: './game-modes.component.html',
  styleUrls: ['./game-modes.component.css']
})
export class GameModesComponent implements OnInit {

  constructor(private router: Router) { }

  leaderboardRoute(){
    this.router.navigateByUrl('/leaderboard');
  };

  playGameRoute(){
    this.router.navigateByUrl('./game-modes');
  };

  ngOnInit(): void {
  }

}
