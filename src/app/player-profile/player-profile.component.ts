import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  playerName:string = "Jane Somebody";
  signUpYear:number = 2021;
  highestScore:number = 20000;
  playerRanking:number = 2;
  numberOfGamesPlayed: number = 0;
 
  constructor(private router: Router, private _location: Location, public data: DataService) { }

  ngOnInit(): void {
  }

  public playCount(){
    // let newNumber = 0;
    this.numberOfGamesPlayed += 1;
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
