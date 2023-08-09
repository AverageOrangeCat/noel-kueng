import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'c-rain-drop',
  templateUrl: './rain-drop.component.html',
  styleUrls: [ './rain-drop.component.scss' ]
})
export class RainDropComponent implements OnInit {
  src: string = '/assets/images/rain-drop.svg';
  alt: string = 'rain-drop.svg';
  style: string[] = ['color-normal'];
  rain_drop_id: string = '';

  constructor() { }

  ngOnInit(): void {
    this.checkDate();
    this.initRainDrop();
    this.setPositionX();
    this.animationCycle();
  }

  checkDate(): void {
    const today = new Date();
    const winter_months = [11, 12, 1, 2, 3];

    if (today.getDate() == 25 && today.getMonth() + 1 == 10) {
      this.src = '/assets/images/birthday.svg';
      this.alt = 'birthday.svg';
      this.style.push('color-normal');
    } else if (winter_months.includes(today.getMonth() + 1)) {
      this.src = '/assets/images/snow.svg';
      this.alt = 'snow.svg';
      this.style.push('color-normal');
    } else {
      this.style.push('color-normal');
    }
  }

  initRainDrop(): void {
    const rain_drops = document.querySelectorAll('[rain-drops]:not([id])');
    rain_drops[0].id = `rain-drop-${rain_drops.length}`;
    this.rain_drop_id = `rain-drop-${rain_drops.length}`;
  }

  setPositionX(): void {
    const rain_drop = document.getElementById(this.rain_drop_id);
    rain_drop?.setAttribute('style', `left: ${anime.random(0, window.innerWidth)}px`);
  }

  animationCycle(): void {
    anime({
      targets: `#${this.rain_drop_id}`,
      translateY: window.innerHeight,
      delay: anime.random(0, 5000),
      duration: anime.random(2000, 3000),
      easing: 'easeInOutQuint',
      opacity: 0,
      complete: () => {
        anime.remove(`#${this.rain_drop_id}`);
        this.setPositionX();
        this.animationCycle();
      }
    });
  }

}
