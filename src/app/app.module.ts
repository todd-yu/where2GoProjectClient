import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UserInputPageComponent } from './pages/user-input-page/user-input-page.component';
import { MainGroupPageComponent } from './pages/main-group-page/main-group-page.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ReturningUserComponent } from './components/returning-user/returning-user.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageModule } from './pages/homepage/homepage.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';

const ROUTES: Routes = [
    { 
      path: 'home', loadChildren: './pages/homepage/homepage.module#HomePageModule',
    },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserInputPageComponent,
    MainGroupPageComponent,
    NewUserComponent,
    ReturningUserComponent,
    ErrorPageComponent,
    NewUserPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
