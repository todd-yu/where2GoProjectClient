import { Component, OnInit } from '@angular/core';
import {HomepageComponent} from "../../pages/homepage/homepage.component";
import { Where2GoUser } from 'src/app/constants/user.model';
@Component({
  selector: 'main-group-page',
  templateUrl: './main-group-page.component.html',
  styleUrls: ['./main-group-page.component.scss']
})
export class MainGroupPageComponent implements OnInit {
  users: Array<any> = ['jake', 'rathew','ronald'];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
