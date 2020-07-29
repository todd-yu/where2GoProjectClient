import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { UserInputPageComponent } from './pages/user-input-page/user-input-page.component';
import { MainGroupPageComponent } from './pages/main-group-page/main-group-page.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ReturningUserComponent } from './components/returning-user/returning-user.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageModule } from './pages/homepage/homepage.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { JoinGroupComponent } from './components/join-group/join-group.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { ExistingGroupComponent } from './components/existing-group/existing-group.component';




const ROUTES: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'new-user', component: NewUserPageComponent },
    { path: 'returning-user', component: MainGroupPageComponent },
    { path: 'login', component: LoginPageComponent},
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
    LoginPageComponent,
    JoinGroupComponent,
    CreateGroupComponent,
    ExistingGroupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HomePageModule,
    InputsModule,
    BrowserAnimationsModule,
    PopupModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
