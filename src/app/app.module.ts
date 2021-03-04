import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameModesComponent } from './game-modes/game-modes.component';
import { TimeChallengeComponent } from './game-modes/time-challenge/time-challenge.component';
import { EndlessTriviaComponent } from './game-modes/endless-trivia/endless-trivia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignInComponent,
    CreateProfileComponent,
    LeaderboardComponent,
    GameModesComponent,
    TimeChallengeComponent,
    EndlessTriviaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
