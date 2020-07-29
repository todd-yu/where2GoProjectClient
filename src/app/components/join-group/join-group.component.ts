import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
