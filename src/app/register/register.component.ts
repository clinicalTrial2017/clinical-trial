import { Component, OnInit } from '@angular/core';
import { AuthenticationService }    from '../authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authentication: AuthenticationService ) { }

  vm = {
    credentials: {
      name: "",
      email: "",
      password: ""
    }
  };

  onSubmit = function () {
  this.authentication
    .register(this.vm.credentials)
    .error(function(err){
      alert(err);
    }).then(function(){
      console.log('We Have a User!');
    });
};

  ngOnInit() {
  }

}
