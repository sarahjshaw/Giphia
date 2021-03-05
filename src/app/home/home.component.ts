import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }   //imported the router to use in button function ~Christa~

  //functions to have buttons route to the leaderboard and game play options from the home page ~Christa~

  leaderboardRoute(){
    this.router.navigateByUrl('/leaderboard');
  };

  playGameRoute(){
    this.router.navigateByUrl('./game-modes');
  };


  ngOnInit(): void {
  }

}
