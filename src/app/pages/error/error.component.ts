import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'p-error',
  templateUrl: './error.component.html',
  styleUrls: [ './error.component.scss' ]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: 'c-link',
      delay: 2500,
      duration: 2500,
      easing: 'linear',
      opacity: [1, 0.5, 1],
      loop: true
    });
  }

}
