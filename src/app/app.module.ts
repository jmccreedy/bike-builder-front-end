import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {WebService} from "./web.service";
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { PartsComponent } from "./parts/parts.component";
import { BuildResultComponent } from './build-result/build-result.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SavedBuildsComponent } from './saved-builds/saved-builds.component';
import { SavedBuildComponent } from './saved-build/saved-build.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { AdminPartsListComponent } from './admin-parts-list/admin-parts-list.component';
import { NgxPaginationModule } from "ngx-pagination";
import { AddPartComponent } from './add-part/add-part.component';

let routes: any = [
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

@NgModule({
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
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule{}
