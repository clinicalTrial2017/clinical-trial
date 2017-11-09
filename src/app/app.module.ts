import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { HttpModule }         from '@angular/http';

import { AppComponent }       from './app.component';
import { DocumentDetails }    from './document-details.component';
import { FormsModule }        from '@angular/forms';

import { GetDocument }        from './get-document.service';
import { SearchDocService }   from './search-doc.service';
import { SearchDocComponent } from './search-doc/search-doc.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentDetails,
    SearchDocComponent,
    AddReviewComponent,
    ViewReviewsComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GetDocument, SearchDocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
