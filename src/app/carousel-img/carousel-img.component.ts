import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.css'],
  animations: [
    trigger('carouselAnimation', [
    transition('void => *', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 }))
    ]),
      transition('* => void', [
      animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselImgComponent implements OnInit {
  @Input() slides;

  currentSlide = 0;

  constructor(private firebaseService: FirebaseService) { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  onPlayerStats() {
    this.firebaseService.user.subscribe(userData => {
      this.firebaseService.fetchUserProfile(userData.id);
    })
  }

  ngOnInit(): void {
  }

}
