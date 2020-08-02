import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Where2GoUser } from 'src/app/constants/user.model';

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

  createNewUser(name: string) {
    let newUser = new Where2GoUser(name);
    this._userService.createUser(newUser);
    let url = this._generateUrl(newUser.id);
    return url;
  }

  private _generateUrl(id: number): string {
    return 'https://where2go.com/existing-group/' + id.toString();
  }

  onSubmit() {
    let user = new Where2GoUser(this.name);
    this._userService.createUser(user);
  }
}
