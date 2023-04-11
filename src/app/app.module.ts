import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {WebService} from "./web.service";
import {HttpClientModule} from "@angular/common/http";
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartsComponent } from "./parts/parts.component";
import { BuildResultComponent } from './build-result/build-result.component';

let routes: any = [
  {
    path: '',
    component: PartsComponent
  },
  {
    path: 'home',
    component: PartsComponent
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'build_result',
    component: BuildResultComponent
  }
];

@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        SignInComponent,
        NavbarComponent,
        PartsComponent,
        BuildResultComponent
    ],
    imports: [
        BrowserModule, RouterModule.forRoot(routes),
        FormsModule, HttpClientModule, ReactiveFormsModule
    ],
  providers: [WebService, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule{}
