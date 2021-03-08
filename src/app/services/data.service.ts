import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  playerName:string = "Jane Somebody";
  signUpYear:number = 2021;
  highestScore:number = 20000;
  playerRanking:number = 2;
  numberOfGamesPlayed: number = 0;

  playCount(){
    this.numberOfGamesPlayed += 1;
  }

  constructor() { }
}
