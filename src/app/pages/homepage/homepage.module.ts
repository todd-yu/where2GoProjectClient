import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';


// const ROUTES: Routes = [
//     {
//         path: '',
//         component: HomepageComponent,
//         canActivate: [],
//         children: [
//             {path: 'new-user', component: NewUserPageComponent},
//             {path: 'returning-user', component: MainGroupPageComponent},
//         ]
//     }
// ];

@NgModule({
    declarations: [
      HomepageComponent,
    ],
    imports: [
      RouterModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [

    ]
  })
  export class HomePageModule { }