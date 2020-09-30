import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }


  login(){
 
    if(this.username=='ricardo' && this.password=='admin'){
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
