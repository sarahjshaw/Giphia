import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-choose-avatar',
  templateUrl: './choose-avatar.component.html',
  styleUrls: ['./choose-avatar.component.css']
})
export class ChooseAvatarComponent implements OnInit {

  constructor(private router: Router, private _location: Location, public data: DataService) { }

  ngOnInit(): void {
  }

}
