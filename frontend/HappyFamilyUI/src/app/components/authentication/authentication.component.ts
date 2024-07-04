import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  loginData = {
    email: '',
    password: ''
  };

  signupData = {
    name: '',
    email: '',
    password: ''
  };

  onLogin() {
    // Handle login logic here
    console.log('Login data:', this.loginData);
  }

  onSignup() {
    // Handle signup logic here
    console.log('Signup data:', this.signupData);
  }
}
