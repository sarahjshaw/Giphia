import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private _location: Location) { }   //imported the router to use in button function ~Christa~

  //functions to have buttons route to the leaderboard and game play options from the home page ~Christa~

  leaderboardRoute(){
    this.router.navigateByUrl('/leaderboard');
  };

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  };

  backClick(){
    this._location.back();
  }


  ngOnInit(): void {
  }

}
