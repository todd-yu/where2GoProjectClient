import { Injectable } from '@angular/core';
import { Where2GoUser } from '../constants/user.model';
import { Where2GoGroup } from '../constants/group.model';

export class AppState {
  currentUser: Where2GoUser;
  currentGroup: Where2GoGroup;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  appState: AppState;

  constructor() {
    this.appState = {
      currentUser: undefined,
      currentGroup: undefined
    };
  }

  updateCurrentUser(user: Where2GoUser) {
    this.appState.currentUser = user;
  }

  updateCurrentGroup(group: Where2GoGroup) {
    this.appState.currentGroup = group;
  }

  getCurrentUser(): Where2GoUser {
    return this.appState.currentUser;
  }

  getCurrentGroup(): Where2GoGroup {
    return this.appState.currentGroup;
  }
}
