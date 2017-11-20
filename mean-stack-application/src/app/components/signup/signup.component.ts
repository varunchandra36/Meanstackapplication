import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    //Required Fields
    if(!this.validateService.validateRegister(user)) {
     // this.flashMessage.show("Please Fill Out all the Details", {cssClass: 'alert-danger', timeout: 4000});
      return false;
    } else {
      //Validate email
      if(!this.validateService.validateEmail(user.email)) {
       // this.flashMessage.show('Incorrect Email Format', {cssClass: 'alert-danger', timeout: 4000});
        return false;
      }
    }

    //Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        console.log(data.success,"succesfull")
      //  this.flashMessage.show('You are now Registered and can log in', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
      } else {
        console.log("unsuccesfull")
        //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/register']);
      }
    });

  }

}
