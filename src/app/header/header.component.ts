import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  backClick(){
    this._location.back();
  }

  constructor(public router: Router, private _location: Location, public routes: RouterModule, public fireService:FirebaseService) { }


  ngOnInit(): void {
  }

}
