import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebService} from "../web.service";
import {Build} from "../parts/types";

@Component({
  selector: 'app-saved-build',
  templateUrl: './saved-build.component.html',
  styleUrls: ['./saved-build.component.css']
})
export class SavedBuildComponent {
  email = this.activatedRoute.snapshot.params['email'];
  build_id = this.activatedRoute.snapshot.params['id'];
  build: Build | undefined

  constructor(public activatedRoute: ActivatedRoute, private webService: WebService, public route: Router) { }

  ngOnInit(): void {
    this.webService.getSavedBuild(this.email, this.build_id).subscribe((build: any)=>this.build = build.Item)

  }

  backToBuilds() {
    this.route.navigate(['/', 'saved_builds'])
      .then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
  }
}
