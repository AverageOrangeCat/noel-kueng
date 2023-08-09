import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'c-rain-drops',
  templateUrl: './rain-drops.component.html',
  styleUrls: [ './rain-drops.component.scss' ]
})
export class RainDropsComponent implements OnInit {
  @Input()
  times: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
