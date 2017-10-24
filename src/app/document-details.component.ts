import { Component, Input } from '@angular/core';

import { Doc } from './document';
import { GetDocument } from './get-document.service'

@Component({
  selector: 'document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./bootstrap-3.3.7-dist/css/bootstrap.min.css', './app.component.css'],
  providers: [GetDocument]
})



export class DocumentDetails {
  //doc: Doc;
  @Input() doc: Doc;
  
  constructor (
    private getDocument: GetDocument
  ){}

  setDoc(doc:Doc): void {
      this.doc = doc;
  }

  getDoc(): void {
    this.getDocument.getDoc().then(doc => this.doc = doc);
  }

}
