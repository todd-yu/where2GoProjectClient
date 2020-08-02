import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Where2GoUser } from 'src/app/constants/user.model';

@Component({
  selector: 'app-returning-user',
  templateUrl: './returning-user.component.html',
  styleUrls: ['./returning-user.component.scss']
})
export class ReturningUserComponent implements OnInit {
  currUser: Where2GoUser;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.currUser = this._userService.getCurrentUser();
  }

}
