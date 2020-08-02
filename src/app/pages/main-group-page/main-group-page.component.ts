import { Component, OnInit } from '@angular/core';
import {HomepageComponent} from "../../pages/homepage/homepage.component";
import { Where2GoUser, Location } from 'src/app/constants/user.model';
import { SampleUsers } from 'src/app/constants/sample-data';
import { UserService } from 'src/app/services/user.service';

export class group {
    name: string;
    shownStatus: boolean;
}

@Component({
  selector: 'main-group-page',
  templateUrl: './main-group-page.component.html',
  styleUrls: ['./main-group-page.component.scss']
})
export class MainGroupPageComponent implements OnInit {
  groups: Array<group> = [
    {
      name: 'groupA',
      shownStatus: false
    },
    {
      name: 'groupB',
      shownStatus: false
    },
    {
      name: 'groupC',
      shownStatus: false
    },
    {
      name: 'groupD',
      shownStatus: false
    },
    {
      name: 'groupE',
      shownStatus: false
    },
    {
      name: 'groupF',
      shownStatus: false
    },
    {
      name: 'groupA',
      shownStatus: false
    },
  ];
  show: boolean = false;
  groupMembers: Array<Where2GoUser> = SampleUsers.userArray;
  // users: Array<any> = ['jake', 'rathew','ronald'];
  // // use this "sample Data constant as a sample server response for now"
  // sampleData: Array<Where2GoUser> = SampleUsers.userArray;
  constructor(private bigChungus: UserService) { }

  ngOnInit(): void {
    console.log(this.bigChungus.getCurrentUser());
  }
  

  onGroupClick(index: number) {
    this.groups[index].shownStatus = !this.groups[index].shownStatus;
  }

}
