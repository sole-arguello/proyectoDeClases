import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailListComponent } from './user-detail-list/user-detail-list.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { TestObservableComponent } from './test-observable/test-observable.component';



@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    UserListComponent,
    UserDetailListComponent,
    TestObservableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
