import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username!: String;
  // username : string | undefined;
  password!: String;
  errorMessage = "Invalid Credentials";
  successMessage!: String;
  invalidLogin = false;
  loginSuccess = false;


  constructor (private authService: AuthService){

  }




handleLogin(){
  this.authService.login().subscribe(result) => {
    this.invalidLogin =false;
    this.loginSuccess =true;
    this.successMessage = "Login Successfull";
    // Redirect to main page
  };() => {
    this.invalidLogin = true;
    this.loginSuccess =  false;

  };
 
} 

}

