import { Component }        from '@angular/core';
import { AuthenticationService }    from '../authentication.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor( private authentication: AuthenticationService ) { }

  isLoggedIn = this.authentication.isLoggedIn();

  currentUser = this.authentication.currentUser();

}
