import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/models/giphy.model';
import { Trivia } from 'src/app/models/trivia.model';
import { GiphyService } from 'src/app/services/giphy-api.service';
import { TriviaService } from 'src/app/services/trivia-api.service';

@Component({
  selector: 'app-test-count',
  templateUrl: './time-challenge.component.html',
  styleUrls: ['./time-challenge.component.css']
})
export class TimeChallengeComponent implements OnInit {
    giph: Giphy;
    trivia: Trivia;
  constructor() { }

  ngOnInit(): void {
  }


// let cards = Array.from(document.querySelectorAll(".memory-card"));
// const gameBoard = document.querySelector(".memory-game");
// let startPressed = false;
// window.addEventListener("DomContentLoaded", (event) => {
// newDeal();
// }
// )
;

// document.getElementById("resetbutton").addEventListener("click", reset);
// document.getElementById("startbutton").addEventListener("click", startButtonPress);
// function startTimer() {
//   timer.innerHTML = `${minute}mins ${second}secs`; 
//   second++;
//   if (second === 60) {
//     minute++;
//     second = 0;
//   }
// }

// const timer = document.getElementById("timerbutton");
// let second = 0;
// let minute = 0;
// timer.innerHTML = `${minute}mins ${second}secs`;
// let interval;
// function startButtonPress() {
//   if (!startPressed) {
//     interval = setInterval(startTimer, 1000);
//     startPressed = true;
//   }
// }

<<<<<<< HEAD
// // function resetTimer() {
// //   clearInterval(interval);
// //   second = 0; 
// //   minute = 0;
// //   timer.innerHTML = `${minute}mins ${second}secs`;
// }
}
=======
// function reset() {
//   for (let card of cards) {
//     card.style.display = "block";
//     card.childNodes[1].classList.add("hidden");
//     card.childNodes[3].classList.remove("hidden");
//     card.removeEventListener("click");
//   }
//    resetTimer();
// }



// function resetTimer() {
//   clearInterval(interval);
//   second = 0;
//   minute = 0;
//   timer.innerHTML = `${minute}mins ${second}secs`;
// }

}
>>>>>>> signin-login
