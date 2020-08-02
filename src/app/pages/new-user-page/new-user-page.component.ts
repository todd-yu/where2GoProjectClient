import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit {
  name: string = 'big Chungus';
  locations: string ='wonderland';

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  onConsoleLog() {
    console.log(this.name, this.locations);
  }

  BigChungus() {
    this._userService.getUser();
    this.name = 'big Chungus';
    this.locations = 'wonderland';
  }
}
