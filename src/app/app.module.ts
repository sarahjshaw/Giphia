import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameModesComponent } from './game-modes/game-modes.component';
import { EndlessTriviaComponent } from './game-modes/endless-trivia/endless-trivia.component';
import { TimeChallengeComponent } from './game-modes/time-challenge/time-challenge.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChooseAvatarComponent } from './choose-avatar/choose-avatar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselImgComponent } from './carousel-img/carousel-img.component';
import { MatRippleModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignInComponent,
    LeaderboardComponent,
    GameModesComponent,
    TimeChallengeComponent,
    EndlessTriviaComponent,
    PlayerProfileComponent,
    ChooseAvatarComponent,
    CarouselImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatRippleModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
