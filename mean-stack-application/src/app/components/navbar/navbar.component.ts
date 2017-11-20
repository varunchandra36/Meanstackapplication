import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  user: any;
  name: String;
  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.name = this.user.name;
    }),
      err => {
        console.log(err);
        return false;
      }
  }
  onLogoutClick() {
    this.authService.logout();
    //this.flashMessage.show('Logged out successfully', {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['/login']);
    return false;
  }

}
