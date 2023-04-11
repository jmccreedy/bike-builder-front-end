import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CognitoService} from "../cognito.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  public isAuthenticated: boolean;
  public user: any;

  constructor( private router: Router,
               private cognitoService: CognitoService) {
    this.isAuthenticated = false;
    this.user = {};

  }

  ngOnInit(): void {
    this.cognitoService.getUser().then((user: any)=> {
      this.user = user
    })

    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  public signOut(): void {
    this.cognitoService.signOut()
      .then(() => {
        this.router.navigate(['home']);
      });
  }

}
