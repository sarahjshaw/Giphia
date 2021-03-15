import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Location } from '@angular/common'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  playerInfo: any = '';
  faCaretDown = faCaretDown;

  constructor(private router: Router, public firebaseService:FirebaseService, private _location: Location) { }


  ngOnInit(): void {
    this.firebaseService.playerProfile.subscribe(data => {
      this.firebaseService.user.subscribe(user => {
        this.isAuthenticated = !user ? false : true
      })
      this.playerInfo = data;
    })

  }

  onLogin() {
    this.router.navigate(['/signin'])
  }

  onLogout() {
    this.firebaseService.logout()
    this.playerInfo = '';
  }

  onPlayerStats() {
    this.firebaseService.user.subscribe(userData => {
      this.firebaseService.fetchUserProfile(userData.id);
    })
    this.router.navigate(['/player-profile'])
  }

  backClick() {
    this._location.back();
  }

}

// hamburgerFunction(){

// }
