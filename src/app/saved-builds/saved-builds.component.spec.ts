import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedBuildsComponent } from './saved-builds.component';
import {WebService} from "../web.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {LoginButtonComponent} from "../login-button/login-button.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "@auth0/auth0-angular";
import {NgxPaginationModule} from "ngx-pagination";

describe('SavedBuildsComponent', () => {
  let component: SavedBuildsComponent;
  let fixture: ComponentFixture<SavedBuildsComponent>;

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
      declarations: [ SavedBuildsComponent, LoginButtonComponent ],
      providers: [WebService]
    })
    .compileComponents();


    fixture = TestBed.createComponent(SavedBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
