import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';
  errorMessage='The user name or password is incorrect';
  invalidLogin=false;
  //dependenci inyection
  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
    ) { }


  login(){
 
    if(this.authenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username]);
      alert('welcome:'+this.username.toUpperCase());
      this.invalidLogin= false;
    }else {
      this.invalidLogin= true;
    }

  }
  ngOnInit(): void {
  }

}
