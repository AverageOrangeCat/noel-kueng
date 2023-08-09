import { Component, enableProdMode } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  constructor() { }

  ngOnInit(): void {
    enableProdMode();

    this.checkDate();
    this.animationCycle();
  }

  checkDate(): void {
    const today = new Date();
    const link_element: any = document.querySelector('#icon');
    const winter_months = [11, 12, 1, 2, 3];

    if (today.getDate() == 25 && today.getMonth() + 1 == 10) {
      link_element.href = '/assets/images/favicon-birthday.png';
    } else if (winter_months.includes(today.getMonth() + 1)) {
      link_element.href = '/assets/images/favicon-snow.png';
    }
  }

  animationCycle() {
    anime({
      targets: 'main',
      delay: 1500,
      duration: 2000,
      opacity: [0, 1],
    });
  }

}
