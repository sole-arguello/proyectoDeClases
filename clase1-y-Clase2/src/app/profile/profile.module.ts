import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CommonsModule } from '../commons/commons.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent
  }
]

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule, 
    CommonsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProfilePageComponent
  ]
})
export class ProfileModule { }
