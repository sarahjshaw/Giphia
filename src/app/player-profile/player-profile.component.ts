import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  playerName:string;
  signUpYear:number = 2021;
  highestScoreEndless:number;
  playerRanking:number = 2;
  numberOfGamesPlayed: number = 3;

  playerInfo: any = '';

  constructor(private router: Router,
              private firebaseService: FirebaseService,
              public data: DataService) { }

ngOnInit() {
  this.firebaseService.playerProfile.subscribe(playerData => {
    this.playerInfo = playerData;
  })
}


playCount(){
    this.numberOfGamesPlayed = this.numberOfGamesPlayed += 1;
    // newNumber = this.numberOfGamesPlayed += 1;
};

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  };

  CreateAvatarRoute(){
    this.router.navigateByUrl('/chooseavatar');
  };

// resetStats() {
// //   clearInterval(interval);
// //   second = 0;
// //   minute = 0;
// //   timer.innerHTML = `${minute}mins ${second}secs`;
// // }
}
