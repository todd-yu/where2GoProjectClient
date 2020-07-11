import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'homepage-component',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  @Input() counter: number;


  constructor(private _router: Router) { }

  ngOnInit(): void {
    console.log('Home page init');
  }

  ngOnDestroy() {
    console.log('');
  }

  // here's the function for navigating between pages; call this function to navigate
  navigate(route) {
    // if route is 'new-user', e.g. this.navigate('new-user'),
    // the "router outlet" component will become the new-user page
    // routing information is contained in homepage.module.ts
    this._router.navigate(['home', route]);
  }

}
