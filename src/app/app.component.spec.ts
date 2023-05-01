import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "@auth0/auth0-angular";
import {NgxPaginationModule} from "ngx-pagination";
import {HomeComponent} from "./home/home.component";
import {PartsComponent} from "./parts/parts.component";
import {BuildResultComponent} from "./build-result/build-result.component";
import {SavedBuildsComponent} from "./saved-builds/saved-builds.component";
import {SavedBuildComponent} from "./saved-build/saved-build.component";
import {AdminPartsListComponent} from "./admin-parts-list/admin-parts-list.component";
import {AddPartComponent} from "./add-part/add-part.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginButtonComponent} from "./login-button/login-button.component";
import {FilterPipe} from "./filter.pipe";
import {WebService} from "./web.service";

describe('AppComponent', () => {
  beforeEach(async () => {
    let routes:any = [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'part_picker',
        component: PartsComponent
      },
      {
        path: 'build_result',
        component: BuildResultComponent
      },
      {
        path: 'saved_builds',
        component: SavedBuildsComponent
      },
      {
        path: 'saved_builds/:email/:id',
        component: SavedBuildComponent
      },
      {
        path: 'admin_parts_list',
        component: AdminPartsListComponent
      },
      {
        path: 'add_part',
        component: AddPartComponent
      }
    ];
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule, RouterModule.forRoot(routes),
        FormsModule, HttpClientModule, ReactiveFormsModule, AuthModule.forRoot({
          domain: 'dev-kurisxhaye83sajk.uk.auth0.com',
          clientId: 'mxIrXLnHB3qJlqePC1cA38WTFYGo3Hwo',
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }), NgxPaginationModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        PartsComponent,
        BuildResultComponent,
        LoginButtonComponent,
        SavedBuildsComponent,
        SavedBuildComponent,
        HomeComponent,
        FilterPipe,
        AdminPartsListComponent,
        AddPartComponent
      ],
      providers: [WebService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bike-builder-front-end'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bike-builder-front-end');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toBeUndefined();
  });
});
