import { Component, Input , OnInit } from '@angular/core';
import { SearchDocService }  from '../search-doc.service';

import { Observable }     from 'rxjs/Observable';
import { ReviewIn } from '../review-in';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css'],
  providers: [SearchDocService]
})

export class ViewReviewsComponent implements OnInit {

  @Input() docid: string;
  reviews: ReviewIn;
  constructor( private searchDocService: SearchDocService ){}

  getReviews(): void {
    console.log('DOCID!')
    console.log(this.docid);
    // this.reviews = this.searchDocService.findReviews('AV3hMbXWYd0ox15Qs4D1');
    this.reviews = this.searchDocService.findReviews(this.docid);
    console.log('REVIEWS!!!')
    console.log(this.reviews);
    //this.reviews =  this.searchDocService.findReviews('AV3hMbXWYd0ox15Qs4D1');
  }

  ngOnInit(){
    this.getReviews();
  }
}
