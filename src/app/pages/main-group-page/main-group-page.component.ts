import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-group-page',
  templateUrl: './main-group-page.component.html',
  styleUrls: ['./main-group-page.component.scss']
})
export class MainGroupPageComponent implements OnInit {
  users: Array<any> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
