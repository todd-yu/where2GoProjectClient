import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { Where2GoUser } from '../constants/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _state: StateService) { }

  getCurrentUser(): Where2GoUser {
    return this._state.getCurrentUser();
  }

  updateUser(user: Where2GoUser) {
    this._state.updateCurrentUser(user);
  }

  createUser(user: Where2GoUser) {
    
  }
}
