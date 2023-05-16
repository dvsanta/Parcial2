import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CafeComponent } from './cafe/cafe.component';
import { CafeListComponent } from './cafe/cafe-list/cafe-list.component';
import { CafeDetailComponent } from './cafe/cafe-detail/cafe-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CafeComponent,
    CafeListComponent,
    CafeDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
