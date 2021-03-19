import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AvatarService } from '../services/avatar.service';
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
  playerAvatar: any = '';

  constructor(private router: Router,
              private firebaseService: FirebaseService,
              public data: DataService,
              private avatarService: AvatarService) { }

ngOnInit() {
  this.firebaseService.playerProfile.subscribe(playerData => {
    this.playerInfo = playerData;
  })

  this.avatarService.chooseAvatar.subscribe(img => {
    console.log(img)
    this.playerAvatar = img;
  })
  
}

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  };

  CreateAvatarRoute(){
    this.router.navigateByUrl('/chooseavatar');
  };


}
