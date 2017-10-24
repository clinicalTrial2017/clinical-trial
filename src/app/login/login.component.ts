import { Component, OnInit }        from '@angular/core';
import { AuthenticationService }    from '../authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authentication: AuthenticationService ) { }

  ngOnInit() {
  }

  vm = {
    credentials: {
      email: "",
      password: ""
    }
  };

  onSubmit = function () {
    this.authentication
    .login(this.vm.credentials)
    .error(function(err){
      alert(err);
    }).then(function(){
      console.log('We are logged in!');
    });
  };
}
