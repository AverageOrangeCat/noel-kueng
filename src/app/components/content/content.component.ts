import { Component, Input, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'c-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.scss' ]
})
export class ContentComponent implements OnInit {
  @Input()
  gap: string = '0rem';

  constructor() { }

  ngOnInit(): void {
  }

}
