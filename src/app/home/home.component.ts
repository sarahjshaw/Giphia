import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { GiphiaLogoService} from 'src/app/services/giphia-logo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private _location: Location, public data: DataService) { }   //imported the router to use in button function ~Christa~
  
  //functions to have buttons route to the leaderboard and game play options from the home page ~Christa~

  numberOfGamesPlayed: number = 0;
  

playCount(){
  this.numberOfGamesPlayed += 1;
}
  
  leaderboardRoute(){
    this.router.navigateByUrl('/leaderboard');
  };

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  };

  playerStats(){
    this.router.navigateByUrl('/player-profile');
  };

  backClick(){
    this._location.back();
  }


  ngOnInit(): void {
  }

}

