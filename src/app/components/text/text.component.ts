import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-text',
  templateUrl: './text.component.html',
  styleUrls: [ './text.component.scss' ]
})
export class TextComponent implements OnInit {
  style: string[] = ['color-normal'];

  constructor() { }

  ngOnInit(): void {
    this.checkDate();
  }

  checkDate(): void {
    const today = new Date();

    if (today.getDate() == 20 && today.getMonth() + 1 == 4) {
      this.style.push('color-weed');
    } else {
      this.style.push('color-normal');
    }
  }

}
