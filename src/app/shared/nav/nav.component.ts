import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavComponent implements OnInit {

  data: Observable<string>;
  hora: Observable<string>;

  constructor() {
    this.hora = new Observable<string>;
    this.data = new Observable<string>;
  }

  ngOnInit() {
    this.data = interval(1000).pipe(map(() => new Date().toLocaleDateString()));
    this.hora = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));
  }
}
