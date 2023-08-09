import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-head',
  templateUrl: './head.component.html',
  styleUrls: [ './head.component.scss' ]
})
export class HeadComponent implements OnInit {
  @Input()
  size: string = '';
  style: string[] = ['color-normal'];

  constructor() { }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    switch (this.size) {
      case 'large':
        this.style.push('head-large');
        break;

      case 'medium':
        this.style.push('head-medium');
        break;

      case 'small':
        this.style.push(' head-small');
        break;
    
      default:
        this.style.push('head-large');
        break;
    }
  }

}
