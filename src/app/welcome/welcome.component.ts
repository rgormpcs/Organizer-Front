import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService} from './../service/data/welcome-data.service';

@Component({
  selector: 'app-welcomes',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
  name='';
  ServerMessage:String;

  //ActivatedRoute to pass parameters
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) { }

  ngOnInit() {
    
   this.name=this.route.snapshot.params['user'];
    
  }
  getWelcomeMessage(){
  //  console.log(this.service.executeGreetingsService());
    //console.log(this.service.executeGreetingsService().subscribe());
    this.service.executeGreetingsService().subscribe(
      response=> this.handleSuccesfulResponse(response)
    );
    console.log("last lines of funtion welcome message")
  }
  handleSuccesfulResponse(response){
    // console.log(response)
    // console.log('Message of response:')
    // console.log(response.message)'
    this.ServerMessage=response.message;
  }

}
