import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Doc } from './document';

@Injectable()

export class GetDocument {
  constructor(private http: Http) {}

  getDoc(): Promise<Doc> {
    // this.http.get("http://localhost:9200/logstash-2017.08.24/logs/AV4THwTKaQaWgoy7WI0U")
    //                 .toPromise()
    //                 .then(response => console.log(response.json()));
    return this.http.get("http://localhost:9200/logstash-2017.08.24/logs/AV4THwTKaQaWgoy7WI0U")
                    .toPromise()
                    .then(response => response.json() as Doc);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
