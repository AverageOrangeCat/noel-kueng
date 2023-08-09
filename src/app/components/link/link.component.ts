import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-link',
  templateUrl: './link.component.html',
  styleUrls: [ './link.component.scss' ]
})
export class LinkComponent implements OnInit {
  @Input()
  href: string = '/';

  @Input()
  type: string = '';

  @Input()
  new_window: string = 'false';
  style: string[] = ['color-normal'];

  constructor() { }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    switch (this.type) {
      case 'solid':
        this.style.push('link-solid');
        break;

      case 'button':
        this.style.push('link-button');
        break;
    
      default:
        this.style.push('link-solid');
        break;
    }
  }

  redirect(): void {
    if (this.new_window == 'true') {
      window.open(this.href);
    } else {
      location.href = this.href;
    }
  }

}
