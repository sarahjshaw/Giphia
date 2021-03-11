import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLogin: boolean = true;
  reqError = null;

  constructor(private firebaseService: FirebaseService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    console.log(form)
    const email = form.value.email;
    const password = form.value.password;
    this.firebaseService.login(email, password).subscribe( data => {
      console.log(data)
      this.firebaseService.fetchUserProfile(data.localId);
      this.router.navigate(['/home']);
    }, error => {
      this.reqError = error.message;
      console.log(error)
    });
    form.reset();
  }

  onSignup(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    this.firebaseService.signUp(email, password).subscribe( data => {
      console.log(data)
      this.firebaseService.createUserProfile(data.localId, username);
      this.router.navigate(['/home']);
    }, error => {
      this.reqError = error.message;
      console.log(error)
    })
    form.reset()
  }

  onSwitchForm() {
    this.isLogin = !this.isLogin;
  }

  onHandleError() {
    this.reqError = null;
  }

}

