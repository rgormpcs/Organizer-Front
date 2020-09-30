import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage='Resource not found';
  

  constructor(private router: Router) { }
  login(){
      this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
