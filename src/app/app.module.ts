import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FramesComponent} from "./frames.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {WebService} from "./web.service";
import {HttpClientModule} from "@angular/common/http";
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

let routes: any = [
  {
    path: '',
    component: FramesComponent
  },
  {
    path: 'home',
    component: FramesComponent
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FramesComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    FormsModule, HttpClientModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
