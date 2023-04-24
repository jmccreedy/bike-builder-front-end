import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {WebService} from "./web.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(public webService: WebService, private router: Router,
              ) {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
  }

  public signOut(): void {
  }

}
