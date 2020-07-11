import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { MainGroupPageComponent } from '../main-group-page/main-group-page.component';
import { NewUserComponent } from 'src/app/components/new-user/new-user.component';
import { NewUserPageComponent } from '../new-user-page/new-user-page.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HomepageComponent,
        canActivate: [],
        children: [
            {path: 'new-user', component: NewUserPageComponent},
            {path: 'returning-user', component: MainGroupPageComponent},
        ]
    }
];

@NgModule({
    declarations: [
      HomepageComponent,
    ],
    imports: [
      RouterModule.forChild(ROUTES),
      FormsModule
    ],
    providers: [],
    bootstrap: [

    ]
  })
  export class HomePageModule { }