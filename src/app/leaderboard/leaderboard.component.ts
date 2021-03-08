import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {


  numberOfGamesPlayed: number = 0;
  
  playerScore = '50000';
  
 
 
  playCount(){
    this.numberOfGamesPlayed += 1;
  }

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  };

  constructor(public router: Router, private _location: Location, public data: DataService) { }

  ngOnInit(): void {
  }

}
