import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerProfile } from '../models/player-profile.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  players: PlayerProfile[] = [];

  constructor(public router: Router,
              private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.fetchLeaderboard().subscribe(newArray => {
      let limitedArray = newArray.sort((a, b) => {
        const first = a.bestScoreEndless;
        const second = b.bestScoreEndless;
        return second - first;
      })
      this.players = limitedArray.slice(0, 10);
    })

  }

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  }

}
