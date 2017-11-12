import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { AuthenticationService }    from '../authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ AuthenticationService ]

})
export class NavbarComponent implements OnInit {
  @Input() signingIn;
  @Output() signed = new EventEmitter<boolean>();


  constructor(private authentication: AuthenticationService) { }

  vm = {
    credentials: {
      email: "",
      password: ""
    }
  };

  isLoggedIn = function(){
      //console.log('is loggedin: ' +  this.authentication.isLoggedIn())
      return this.authentication.isLoggedIn();
  }

  currentUser = function(){
    return this.authentication.currentUser();
  }

  logOut = function(){
    this.authentication.logout();
  }

  onSubmit = function () {
    console.log('starting login, vm is: ');
    console.log(this.vm);
    this.authentication
    .login(this.vm.credentials)
    .error(function(err){
      alert(err);
    }).then(function(){
      console.log('We are logged in!');
    });
  };

  signIn() {
    console.log('sign in ' + this.signingIn);
    this.signed.emit(!this.signingIn);
    console.log(this.signingIn)
  }

  ngOnInit() {
  }

}
