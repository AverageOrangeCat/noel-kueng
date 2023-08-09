import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'c-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss' ]
})
export class TodosComponent implements OnInit {

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
