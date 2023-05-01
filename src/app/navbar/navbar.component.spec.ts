import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "@auth0/auth0-angular";
import {NgxPaginationModule} from "ngx-pagination";
import {WebService} from "../web.service";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule, HttpClientModule, ReactiveFormsModule, AuthModule.forRoot({
          domain: 'dev-kurisxhaye83sajk.uk.auth0.com',
          clientId: 'mxIrXLnHB3qJlqePC1cA38WTFYGo3Hwo',
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }), NgxPaginationModule
      ],
      declarations: [ NavbarComponent ],
      providers: [WebService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
