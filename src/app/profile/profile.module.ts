import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CommonsModule } from '../commons/commons.module';



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule, 
    CommonsModule
  ],
  exports: [
    ProfilePageComponent
  ]
})
export class ProfileModule { }
