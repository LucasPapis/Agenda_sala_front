import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css'],
  animations:[
    trigger('touchAnimation', [
      state('inactive', style({
        transform: 'scale(1)',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),
  ],
})
export class MenuListaComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  comprimentoNav: number = 300;
  alturaNav: number = 800;
  state = 'inactive';
  navBar: boolean = false;

  ngOnInit() {
  }

  onTouchStart(){
    this.state = 'active';
  }

  onTouchEnd(){
    this.state = 'inactive';
  }

  alterarNav():void{
    this.navBar = !this.navBar
  }
  menu_agenda(id:number): void{
    this.router.navigate([`/menu/menu-agendamento`]);
  }

  // openNav() {
  //   document.getElementById("myNav").style.width = "100%";
  // }

  // /* Close when someone clicks on the "x" symbol inside the overlay */
  // closeNav() {
  //   document.getElementById("myNav").style.width = "0%";
  // }

}
