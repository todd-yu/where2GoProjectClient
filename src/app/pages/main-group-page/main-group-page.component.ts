import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-group-page',
  templateUrl: './main-group-page.component.html',
  styleUrls: ['./main-group-page.component.scss']
})
export class MainGroupPageComponent implements OnInit {
  users: Array<any> = [
    {name: 'jake', uses:'useful'},
    {name: 'todd', uses:'useless'}
  ];
  
  constructor() { }

  ngOnInit(): void {
    for (let user of this.users) {
      console.log(user);
    }
  }

}
