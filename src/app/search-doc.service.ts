import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Doc }           from './document';
import { ReviewIn } from './review-in';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchDocService {

  constructor( private http: Http ) { }

  search(term:string): Promise<Doc>{
    return this.http.get('/documents/search/'+term)
                    .toPromise().then(response => response.json() as Doc);
  }

  // findReviews(id:string): void {
  //   this.http.get('http://localhost:3000/find/'+id)
  //            .toPromise().then(response => console.log(response.json()) );
  // }

  findReviews(id:string): Promise<ReviewIn> {
    console.log(id);
    return this.http.get('/find/'+id)
             .toPromise().then(response => response.json() as ReviewIn);
  }
}
