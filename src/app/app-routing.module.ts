
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { GameModesComponent } from './game-modes/game-modes.component';
import { EndlessTriviaComponent } from './game-modes/endless-trivia/endless-trivia.component';
import { TimeChallengeComponent } from './game-modes/time-challenge/time-challenge.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'create-profile', component:CreateProfileComponent },
  { path: 'player-profile', component: PlayerProfileComponent },
  { path: 'game-modes', component:GameModesComponent },
  { path: 'endless-trivia', component: EndlessTriviaComponent},
  { path: 'time-challenge', component: TimeChallengeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

