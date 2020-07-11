import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { HomepageComponent } from '../pages/homepage/homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserInputPageComponent } from './pages/user-input-page/user-input-page.component';
import { MainGroupPageComponent } from './pages/main-group-page/main-group-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomepageComponent,
    UserLoginComponent,
    UserInputPageComponent,
    MainGroupPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
