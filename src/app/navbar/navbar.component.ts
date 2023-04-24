import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  adminEmails = ['jmccreedy65@gmail.com']
  userEmail: any

  constructor(private route: Router, public auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user=>this.userEmail=user?.email)
  }

  goHome() {
    this.route.navigate(['/home'])
  }
  goToPartPicker() {
    this.route.navigate(['/part_picker'])
  }
  goToAdminPartsList() {
    this.route.navigate(['/admin_parts_list'])
  }
  goToSavedBuilds() {
    this.route.navigate(['/saved_builds'])
  }
  isAdmin(currentUserEmail:string){
    return this.adminEmails.find(adminEmail => adminEmail === currentUserEmail)
  }

}
