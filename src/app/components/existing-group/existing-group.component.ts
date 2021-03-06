import { Component, OnInit, Input } from '@angular/core';
import {HomepageComponent} from "../../pages/homepage/homepage.component";
import { Where2GoUser, Location } from 'src/app/constants/user.model';
import { SampleUsers } from 'src/app/constants/sample-data';

@Component({
  selector: 'existing-group',
  templateUrl: './existing-group.component.html',
  styleUrls: ['./existing-group.component.scss']
})
export class ExistingGroupComponent implements OnInit {
  @Input() config: number;
  users: Array<any> = ['jake', 'rathew','ronald'];
  currUser: Where2GoUser;
  // use this "sample Data constant as a sample server response for now"
  sampleData: Array<Where2GoUser> = SampleUsers.userArray;

  constructor() { }

  ngOnInit(): void {

  }

}
