import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameModesComponent } from './game-modes/game-modes.component';
import { EndlessTriviaComponent } from './game-modes/endless-trivia/endless-trivia.component';
import { TimeChallengeComponent } from './game-modes/time-challenge/time-challenge.component';
import { FirebaseService } from './services/firebase.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignInComponent,
    CreateProfileComponent,
    LeaderboardComponent,
    GameModesComponent,
    EndlessTriviaComponent,
    TimeChallengeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBRhAlt1aJy_2BKQG-t4PbAZzp6zTYFHjg',
      authDomain: 'giphia-9e631.firebaseapp.com',
      databaseURL: 'https://giphia-9e631-default-rtdb.firebaseio.com/',
      projectId: 'giphia-9e631',
      storageBucket: 'giphia-9e631.appspot.com',
      messagingSenderId: '910625041730',
      appId: '1:910625041730:web:c8322c587ce123c7a5ecdb',
      measurementId: 'G-16HX29XC3N',
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
