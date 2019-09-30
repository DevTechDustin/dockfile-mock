import { AddDocumentComponent } from './../add-document/add-document.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'DocFile Mockup';
  constructor() { }

  ngOnInit() {
  }

}
