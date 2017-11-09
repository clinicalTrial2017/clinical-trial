import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
//import { AuthHelperService } from './auth-helper.service';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {

  constructor( private http: Http ) { }


  // saveToken = function(token): void {
  //   console.log('saving this token: ' + token);
  //   localStorage.setItem('token', token);
  // }
  //
  // getToken = function(){
  //   return localStorage.getItem('token');
  // }

  isLoggedIn = function() {
    var payload;

    if (localStorage.getItem('token')){
      payload = localStorage.getItem('token').split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);

      return payload.exp > Date.now()/1000;
    }
    else{
      return false;
    }
  }//end of isLoggedIn()

  currentUser = function() {
    var payload = localStorage.getItem('token').split('.')[1];
    payload = window.atob(payload);
    payload = JSON.parse(payload);
    console.log(payload);
    return payload;
    // return {
    //   email : this.payload.email,
    //   name : this.payload.name
    // }
  }//end of currentUser()

  register = function(user) {
    console.log('Registration Process Started!');
       this.http.post('/api/register', user).subscribe(function(data){
         var token = JSON.parse(data._body);
         console.log(token);
         localStorage.setItem('token', token.token);
         //this.saveToken(token.token);
         console.log('localStorage say token is: ' + localStorage.getItem('token'));
       //return this.data.token;
     });
   }

   login = function(user){
     console.log('Login Service Started!!!!');
     this.http.post('/api/login', user).subscribe(function(data){
       console.log(data._body);
       var token = JSON.parse(data._body);
       localStorage.setItem('token', token.token);
     });
   }

   logout = function(){
     console.log('logging out!');
     localStorage.removeItem('token');
   }
}//end of class
