import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { AvatarService } from '../services/avatar.service';


@Component({
  selector: 'app-choose-avatar',
  templateUrl: './choose-avatar.component.html',
  styleUrls: ['./choose-avatar.component.css']
})
export class ChooseAvatarComponent implements OnInit {

  constructor(private router: Router, 
              private _location: Location, 
              public data: DataService,
              private avatarService: AvatarService) { }

  ngOnInit(): void {
  }
  
  public slides = [
    { src: "https://avatars.dicebear.com/api/bottts/example.svg?colors%5B%5D=purple" },
    { src: "https://avatars.dicebear.com/api/bottts/example.svg?colors%5B%5D=pink" },
    { src: "https://avatars.dicebear.com/api/bottts/example.svg?colors%5B%5D=blue" },
    { src: "https://avatars.dicebear.com/api/bottts/example.svg?colors%5B%5D=green" },
    { src: "https://avatars.dicebear.com/api/bottts/example.svg?colors%5B%5D=yellow" },
    { src: "https://avatars.dicebear.com/api/bottts/example.svg?colors%5B%5D=orange" },
    { src: "https://avatars.dicebear.com/api/bottts/example.svg?colors%5B%5D=red" }
  ];

  // onPickAvatar(path) {
  //   console.log(path.src)
  //   this.avatarService.chooseAvatar.next(path)
  // }

}
