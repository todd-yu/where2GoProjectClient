import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'homepage-component',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  @Input() counter: number;
  

  constructor() { }

  ngOnInit(): void {
    console.log("Home page init");
  }

  ngOnDestroy() {
    console.log("")
  }

}
