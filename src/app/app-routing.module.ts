
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { GameModesComponent } from './game-modes/game-modes.component';
import { EndlessTriviaComponent } from './game-modes/endless-trivia/endless-trivia.component';
import { TimeChallengeComponent } from './game-modes/time-challenge/time-challenge.component';
import { ChooseAvatarComponent } from './choose-avatar/choose-avatar.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent, 
     data: { show:true,
             showChildren:false,
             navLabel:'Home',
             title:'Giphia',
             description: 'trivia game with a giphy twist',
             icon:'house',
           }
  },

  { path: 'leaderboard', component: LeaderboardComponent,
     data: { show:true,
             showChildren:false,
             navLabel:'LeaderBoard',
             title:'Giphia',
             description: 'trivia game with a giphy twist',
             icon:'trophy',
            }
  },

  { path: 'signin', component: SignInComponent,
     data: { show:true,
             showChildren:false,
             navLabel:'Sign In',
             title:'Giphia',
             description: 'trivia game with a giphy twist',
             icon:'person',
           }
  },

  { path: 'create-profile', component: CreateProfileComponent,
     data: { show:true,
             showChildren:false,
             navLabel:'Create Profile',
             title:'Giphia',
             description: 'trivia game with a giphy twist', 
             icon: 'person',
           }
  },

  { path: 'chooseavatar', component: ChooseAvatarComponent,
     data: { show:true,
          showChildren:false,
          navLabel:'Choose Avatar',
          title:'Giphia',
          description: 'trivia game with a giphy twist', 
          icon: 'person',
        }
},

  { path: 'player-profile', component: PlayerProfileComponent,
     data: { show:true,
             showChildren:false,
             navLabel:'Profile',
             title:'Giphia',
             description: 'trivia game with a giphy twist',
             icon: 'person',
            }
   },

  { path: 'gamemodes', component: GameModesComponent,
     data: { show:true,
             showChildren:false,
             navLabel:'Game Modes',
             title:'Giphia',
             description: 'trivia game with a giphy twist',
             icon: 'game controller',
            }
  },

  { path: 'endless-trivia', component: EndlessTriviaComponent,
     data: { show:true,
             showChildren:false,
             navLabel:'Endless Trivia',
             title:'Giphia',
             description: 'trivia game with a giphy twist', 
             icon: 'question mark',
   }
  },

  { path: 'time-challenge', component: TimeChallengeComponent,
     data: { show:true,
     showChildren:false,
     navLabel:'Time Challenge',
     title:'Giphia',
     description: 'trivia game with a giphy twist',
     icon: 'stop watch',
     
     }
  },

  { path: '', redirectTo: '/home', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

