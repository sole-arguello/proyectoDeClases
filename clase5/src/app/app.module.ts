import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePipe } from './pipe-propio/employee.pipe';
import { ShadowDirective } from './directiva-propio/shadow.directive';
import { PipeDirectivasPropiasComponent } from './pipe-directivas-propias/pipe-directivas-propias.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeePipe,
    ShadowDirective,
    PipeDirectivasPropiasComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
