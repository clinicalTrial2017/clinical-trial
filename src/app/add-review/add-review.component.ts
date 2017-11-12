import { Component, Input } from '@angular/core';
import { Review } from './review';
import { Doc } from '../document';
import { InsertDataService } from '../insert-data.service'
import { AuthenticationService }    from '../authentication.service'

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
  providers: [InsertDataService, AuthenticationService ]
})
export class AddReviewComponent {

  @Input() doc: Doc;
  @Input() docid: string;

  constructor( private insertData: InsertDataService, private authentication: AuthenticationService ){}

  model = new Review( this.docid , '');

  submitted = false;

  isLoggedIn = function(){
      //console.log('is loggedin: ' +  this.authentication.isLoggedIn())
      return this.authentication.isLoggedIn();
  }

  onSubmit() {
    this.submitted = true;
    this.model.id=this.docid;
    this.insertData.insert(this.model);
    console.log(this.model);}
}
