import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: 'c-mouse',
      delay: 2500,
      duration: 2000,
      opacity: [0, 1],
    });
  }

}
