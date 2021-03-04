import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service'
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient,
              private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.http.get('http://jservice.io/api/random')
      .subscribe(data => console.log(data));
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=eXhNdgjlQiPGRXTVpgPL8TKWNTfaToEa&q=Operation&limit=25&offset=0&rating=pg-13&lang=en')
      .subscribe(data => console.log(data));
  }

firebaseAuth = AngularFireAuth;

fireService = FirebaseService;

isLoggedIn = false;

  // async signIn(email: string, password: string) {
  //   await this.firebaseAuth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       this.isLoggedIn = true;
  //       localStorage.setItem('user', JSON.stringify(res.user));
  //     });
  // }

  // async createAccount(email: string, password: string) {
  //   await this.fireService
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       this.isLoggedIn = true;
  //       localStorage.setItem('user', JSON.stringify(res.user));
  //     });
  // }

  // logOut() {
  //   this.firebaseAuth.signOut()
  //   localStorage.removeItem('user')
  // }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.firebaseService.login(email, password).subscribe( data => console.log(data));
    form.reset();
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.firebaseService.signUp(email, password).subscribe( data => console.log(data))
    form.reset()
  }
  
}
