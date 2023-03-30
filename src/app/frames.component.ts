import {Component} from '@angular/core';
import {WebService} from "./web.service";
import {Router} from "@angular/router";
import {CognitoService, IUser} from "./cognito.service";

@Component({
  selector: 'frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent {
  framesList: any = [];
  isAuthenticated: boolean;
  user: any;

  constructor(public webService: WebService, private router: Router,
              private cognitoService: CognitoService) {
    this.isAuthenticated = false;
    this.user = {};
  }

  ngOnInit() {
    this.webService.getFrameInfo()
      .subscribe((frames_list: any) => this.framesList = frames_list.Items);


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
