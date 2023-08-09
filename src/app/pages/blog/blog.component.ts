import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'p-blog',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.scss' ]
})
export class BlogComponent implements OnInit {

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
