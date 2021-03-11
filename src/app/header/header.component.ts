import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerProfile } from '../models/player-profile.model';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  playerInfo: any = '';

  constructor(private router: Router, public firebaseService:FirebaseService) { }


  ngOnInit(): void {
    this.firebaseService.playerProfile.subscribe(data => {
      this.firebaseService.user.subscribe(user => {
        this.isAuthenticated = !user ? false : true
      })
      this.playerInfo = data[0];
    })

  }

  onLogin() {
    this.router.navigate(['/signin'])
  }

  onLogout() {
    this.firebaseService.logout()
    this.playerInfo = '';
  }

  backClick() {
  }

}
