import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'DocFile Mockup';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Magneta'),
    new Hero(3, 'Volcano'),
    new Hero(4, 'Destructo')
  ];

  customerInput: any;

  constructor() { console.log(this.customerInput); }

  ngOnInit() {

  }

}
