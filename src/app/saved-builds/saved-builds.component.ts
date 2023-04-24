import {Component} from '@angular/core';
import {Build} from "../parts/types";
import {WebService} from "../web.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-saved-builds',
  templateUrl: './saved-builds.component.html',
  styleUrls: ['./saved-builds.component.css']
})
export class SavedBuildsComponent {
  builds: Build[] = []
  email: any
  token: any

  constructor(public webService: WebService, public auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user=>{
      this.email=user?.email
      this.webService.getSavedBuilds(this.email).subscribe((builds_list: any) => this.builds = builds_list.Items)
    });
  }
}
