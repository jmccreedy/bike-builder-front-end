import {Component, Inject} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <a class="nav-link" (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
      </a>
    </ng-container>
    <ng-template #loggedOut>
      <a class="nav-link" (click)="auth.loginWithRedirect({appState: {target: this.router.url}})">Log in</a>
    </ng-template>
  `,
  styles: [],
})
export class LoginButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, public router: Router) {}
}
