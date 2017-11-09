import { Component } from '@angular/core';
import { Register } from './register';

import { AuthenticationService }    from '../authentication.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService]
})
export class RegisterComponent {

  constructor( private authentication: AuthenticationService ) { }

  rg = new Register( '', '', '' );


  onSubmit = function () {
  this.authentication
    .register(this.rg)
    .error(function(err){
      alert(err);
    }).then(function(){
      console.log('We Have a User!');
      console.log(this.rg);

    });
};


}
