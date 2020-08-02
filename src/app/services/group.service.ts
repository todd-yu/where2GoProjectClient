import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private _state: StateService) { }

  createGroup(name: string) {
    
  }
}
