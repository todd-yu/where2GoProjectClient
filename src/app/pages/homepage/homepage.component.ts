import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Where2GoUser} from '../../constants/user.model';

@Component({
  selector: 'homepage-component',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  currUserName: string;
  currUserId: string;
  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  onSubmit() {
    const user: Where2GoUser = {
      name: this.currUserName,
      id: this.currUserId,
      locationPreferences: []
    };
    console.log(user);
  }

  // here's the function for navigating between pages; call this function to navigate
  navigate(route) {
    // if route is 'new-user', e.g. this.navigate('new-user'),
    // the "router outlet" component will become the new-user page

    // IMPORTANT
    // routing information is contained in app.module.ts, NOT homepage.module.ts

    this._router.navigate([route]);
    }

  // newUser(){
  //   this.navigate('new-user');
  //   }

  // returningUser(){
  //   this.navigate('returning-user')
  // }

  mainGroup() {
    this._router.navigate(['returning-user']);
  }

}
