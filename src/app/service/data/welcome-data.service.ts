import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class GreetingBean{
  constructor(public message:string){}
  
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) {  }

  executeGreetingsService(){
    //console.log("mensaje de ejecucion servidor")
    return this.http.get<GreetingBean>('http://localhost:8090/greeting-bean');
    
  }
}
