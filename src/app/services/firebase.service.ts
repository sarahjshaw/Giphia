import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
  isLoggedIn = false;

  user = new Subject<User>();

  constructor(public firebaseAuth: AngularFireAuth,
              private http: HttpClient) {}

  // sarah

  async signIn(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  async createAccount(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  logOut() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

  // mario

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
