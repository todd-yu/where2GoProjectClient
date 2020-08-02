import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
      HomepageComponent,
    ],
    imports: [
      RouterModule,
      FormsModule,
      NgbModule
    ],
    providers: [],
    bootstrap: [

    ]
  })
  export class HomePageModule { }