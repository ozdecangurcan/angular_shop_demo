import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false;

  login(user:User):boolean{
    if(user.userName=="admin" && user.password=="12345"){
      this.loggedIn=true;
      localStorage.setItem("isLogged","CanActivate");
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
