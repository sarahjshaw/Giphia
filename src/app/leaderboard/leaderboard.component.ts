import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  numberOfGamesPlayed: number = 0;
  playerScore = '50000';

  constructor(public router: Router,
              private firebaseService: FirebaseService,
              public data: DataService) { }

  ngOnInit(): void {
    this.firebaseService.fetchLeaderboard()
    
  }

  playCount(){
    this.numberOfGamesPlayed += 1;
  }

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  };

}
