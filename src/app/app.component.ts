import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap-3.3.7-dist/css/bootstrap.min.css', './app.component.css']
})


export class AppComponent {
  title = 'Clinical Trial';

  // getDoc(): void {
  //   this.http.get("http://localhost:9200/logstash-2017.08.14/logs/AV3hMbXWYd0ox15Qs4Dy")
  //   .toPromise().then(response => console.log(response.json()));
  // }
}
