import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

    authenticate(username, password){
      //console.log('before'+ this.isUserLoggedIn());
      if(username=='ricardo' && password=='admin'){
        sessionStorage.setItem('authenticateUser',username)
        //console.log('after'+ this.isUserLoggedIn());
        return true;
    }else{
      return false
    }
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateUser')
    return !(user===null)
  }
  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
