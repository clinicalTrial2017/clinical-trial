import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Review }     from './add-review/review';

@Injectable()
export class InsertDataService {

  constructor( private http: Http ) { }

  insert(item:Review): void {
    this.http.post('/insert', item)
    .subscribe();
  }
}
