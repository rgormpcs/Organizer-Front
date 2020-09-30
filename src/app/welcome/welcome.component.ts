import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcomes',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
  name='';
  //ActivatedRoute to pass parameters
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    
   this.name=this.route.snapshot.params['user'];
    
  }

}
