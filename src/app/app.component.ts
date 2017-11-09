import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap-3.3.7-dist/css/bootstrap.min.css', './app.component.css']
})


export class AppComponent {
  title = 'Clinical Trial';
  signingIn = false;

  signIn(sign){
    this.signingIn = sign;
  }
}
