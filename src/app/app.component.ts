
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show: boolean = true;  //sets whether or not the nav link gets displayed in the header
  showChilderen:boolean = false;  //determines whether or not to match the exact parameter of the routerlink wehn navigating the route
  navlabel: string = ''; //sets what the label should be for the nav menu button
  navIcon: string = '';  //decides which SVG should be included for the navigation menu button
  title: string = ''; //sets the description meta tags appropriate to the page
  description: string = ''; //sets the description meta tags appropriate to the page

  constructor() {}

 
}
