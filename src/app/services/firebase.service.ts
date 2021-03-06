import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  user = new Subject<User>();

  constructor(private http: HttpClient) {}


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
