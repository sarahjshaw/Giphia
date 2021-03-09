import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  playerProfile = new Subject<any>();
  user = new BehaviorSubject<User>(null);
  //cw
  // isLoggedin:boolean = false;

  constructor(private http: HttpClient) {}


  fetchUserProfile(uid: string) {
    this.http.get(`https://giphia-9e631-default-rtdb.firebaseio.com/users/${uid}.json`)
      .subscribe(data => {
        // console.log(data)
        this.playerProfile.next(data);
      });
  }

  createUserProfile(uid: string, username: string) {
    this.http.post(`https://giphia-9e631-default-rtdb.firebaseio.com/users/${uid}.json`, {
      username: username
    })
      .subscribe(data => console.log(data));
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

}
