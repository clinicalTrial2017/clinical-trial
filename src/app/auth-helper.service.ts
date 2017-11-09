import { Injectable } from '@angular/core';

@Injectable()
export class AuthHelperService {

  constructor() { }

  //saveToken = function(token) {
  //   console.log('saving this token: ' + token);
  //   localStorage.setItem('token', token);
  // }
  //
  // getToken = function(){
  //   return localStorage.getItem('token');
  // }

  // isLoggedIn = function() {
  //   var token = this.getToken();
  //   var payload;
  //
  //   if (token){
  //     payload = token.split('.')[1];
  //     payload = atob(payload);
  //     payload = JSON.parse(payload);
  //
  //     return payload.exp > Date.now()/1000;
  //   }
  //   else{
  //     return false;
  //   }
  // }//end of isLoggedIn
  //
  // currentUser = function() {
  //   if(this.isLoggedIn()){
  //     var token = this.getToken();
  //     var payload = token.split('.')[1];
  //     payload = atob(payload);
  //     payload = JSON.parse(payload);
  //     return {
  //       email : payload.email,
  //       name : payload.name
  //     }
  //   }
  // }

}
