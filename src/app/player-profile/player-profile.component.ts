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

  playerRanking:number = 2;
  // isAuthenticated: boolean = false;

  playerInfo: any = '';

  constructor(private router: Router,
              private firebaseService: FirebaseService,
              public data: DataService) { }

ngOnInit() {
  this.firebaseService.playerProfile.subscribe(playerData => {
    this.playerInfo = playerData;
    
  })
  
}

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  };

  CreateAvatarRoute(){
    this.router.navigateByUrl('/chooseavatar');
  };


}
