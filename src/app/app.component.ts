import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Where2Go';
  appCounter: number = 0;
  showHomePage: boolean = true;
  numberList: Array<number> = [1, 2, 3, 4, 5];
  showNewUser: boolean = false;
  

  ngOnInit() {
  }

  incrementCounter() {
    this.appCounter = this.appCounter + 1;
    for (let i = 0; i < this.numberList.length; i+=1) {
      this.numberList[i] += 1;
    }
    console.log(this.numberList);
  }

  decremenetCounter() {
    this.appCounter -= 1;
    this.numberList.forEach(num => num -= 1);
  }

  toggleHome() {
    this.showHomePage = !this.showHomePage;
  }

  toggleNew(){
    this.showNewUser= !this.showNewUser;
    console.log(this.showNewUser);
  }


}
