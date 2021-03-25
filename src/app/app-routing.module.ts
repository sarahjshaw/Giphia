
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { GameModesComponent } from './game-modes/game-modes.component';
import { EndlessTriviaComponent } from './game-modes/endless-trivia/endless-trivia.component';
import { TimeChallengeComponent } from './game-modes/time-challenge/time-challenge.component';
import { ChooseAvatarComponent } from './choose-avatar/choose-avatar.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'leaderboard', component: LeaderboardComponent },

  { path: 'signin', component: SignInComponent },

  { path: 'chooseavatar', component: ChooseAvatarComponent },

  { path: 'player-profile/:image', component: PlayerProfileComponent },

  { path: 'gamemodes', component: GameModesComponent },

  { path: 'endless-trivia', component: EndlessTriviaComponent },

  { path: 'time-challenge', component: TimeChallengeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

