import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

@Injectable()
export class AuthenticationService {

  constructor( private http: Http ) { }

  saveToken = function(token) {
    localStorage.setItem('token', token);
  }

  getToken = function(){
    return localStorage.getItem('token');
  }

  isLoggedIn = function() {
    var token = this.getToken();
    var payload;

    if (token){
      payload = token.split('.')[1];
      payload = atob(payload);
      payload = JSON.parse(payload);

      return payload.exp > Date.now()/1000;
    }
    else{
      return false;
    }
  }//end of isLoggedIn

  currentUser = function() {
    if(this.isLoggedIn()){
      var token = this.getToken();
      var payload = token.split('.')[1];
      payload = atob(payload);
      payload = JSON.parse(payload);
      return {
        email : payload.email,
        name : payload.name
      }
    }
  }

  register = function(user) {
     return this.http.post('/api/register', user).success(function(data){
       this.saveToken(data.token);
     });
   }

   login = function(user) {
     return this.http.post('/api/login', user).success(function(data) {
       this.saveToken(data.token);
     });
   }

   logout = function(){
     localStorage.removeItem('token');
   }
}//end of class
