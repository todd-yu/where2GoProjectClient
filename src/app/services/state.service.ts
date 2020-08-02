import { Injectable } from '@angular/core';
import { Where2GoUser, Where2GoGroup } from '../constants/user.model';

export class AppState {
  currentUser: Where2GoUser;
  currentGroup: Where2GoGroup;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
}
