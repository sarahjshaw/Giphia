import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PlayerProfile } from '../models/player-profile.model';
import { User } from '../models/user.model';

interface AuthREsponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  playerRank = new Subject<any>();
  playerProfile = new Subject<PlayerProfile>();
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient,
              private router: Router) {}

  fetchLeaderboard() {
    return this.http.get(`https://giphia-9e631-default-rtdb.firebaseio.com/users.json`)
      .pipe(map((resData) => {
        const leaderboardArr = [];
        for (let key in resData) {
          leaderboardArr.push({...resData[key]});
        }
        return leaderboardArr;
      }))
  }

  findPlayerRanking(username: string) {
    this.fetchLeaderboard().subscribe(newArray => {
      let limitedArray = newArray.sort((a, b) => {
        const first = a.bestScoreEndless;
        const second = b.bestScoreEndless;
        return second - first;
    })
      const rank = limitedArray.findIndex(playerData => playerData.username === username) + 1;
      this.playerRank.next(rank);
  })}

  fetchUserProfile(uid: string) {
    this.http.get<any>(`https://giphia-9e631-default-rtdb.firebaseio.com/users/${uid}.json`)
      .subscribe(data => {
        this.playerProfile.next(data);
      });
  }

  createUserProfile(uid: string, username: string) {
    this.http.patch<PlayerProfile>(`https://giphia-9e631-default-rtdb.firebaseio.com/users/${uid}.json`, {
      username: username,
      startDate: new Date(),
      gamesPlayed: 0
    })
      .subscribe(data => {
        console.log(data)
        this.fetchUserProfile(uid);
      });
  }

  updateEndlessScore(endless_high_score: number) {
    this.user.subscribe(data => {
      this.fetchUserProfile(data.id);
      this.playerProfile.subscribe(playerData => {
        this.http.patch(`https://giphia-9e631-default-rtdb.firebaseio.com/users/${data.id}.json`, {
          bestScoreEndless: endless_high_score
            })
            .subscribe(data => console.log(data));
          })
        })
  }

  updateGamesPlayed() {
    this.user.subscribe(userData => {
      this.fetchUserProfile(userData.id);
      this.playerProfile.subscribe(playerData => {
        this.http.patch(`https://giphia-9e631-default-rtdb.firebaseio.com/users/${userData.id}.json`, {
          gamesPlayed: playerData.gamesPlayed + 1
        })
        .subscribe(data => console.log(data))
      })
    })
  }


  signUp(email: string, password: string) {
    return this.http.post<AuthREsponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRhAlt1aJy_2BKQG-t4PbAZzp6zTYFHjg',
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(tap((resData) => {
      const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
      const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
      this.user.next(user);
    }))
  }


  login(email: string, password: string) {
    return this.http.post<AuthREsponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRhAlt1aJy_2BKQG-t4PbAZzp6zTYFHjg',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(tap((resData) => {
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
        this.user.next(user);
      }))
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/signin']);
  }


}
