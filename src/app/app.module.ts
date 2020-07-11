import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ReturningUserComponent } from './components/returning-user/returning-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewUserComponent,
    ReturningUserComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
