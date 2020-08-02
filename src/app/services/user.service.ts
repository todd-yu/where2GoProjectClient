import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _state: StateService) { }

  getUser() {
    return 'bigChungus';
  }

  updateUser(id:string) {
    
  }
}
