import { Component, OnInit } from '@angular/core';
import { SearchDocService }  from '../search-doc.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Doc }    from '../document'

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-search-doc',
  templateUrl: './search-doc.component.html',
  styleUrls: ['../bootstrap-3.3.7-dist/css/bootstrap.min.css', './search-doc.component.css'],
  providers: [SearchDocService]
})
// export class SearchDocComponent implements OnInit {
export class SearchDocComponent {
  // doc: Observable<Doc>;
  doc: Doc;
  selectedDoc: Doc;
  constructor( private searchDocService: SearchDocService ) { }

  searchDoc(term:string): void {
      this.doc = this.searchDocService.search(term);
      // console.log('Search Documents Componnt!');
      // console.log(this.doc);
  }

  onSelect(doc:Doc): void {
      this.selectedDoc = doc;
      console.log(this.selectedDoc);
  }

  ngOnInit() {
  }

}
