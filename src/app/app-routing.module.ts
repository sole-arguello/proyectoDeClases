import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';


const routes: Routes = [
  {
    //localhost:4200
    path: '',
    component: HomePageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'profil',
    redirectTo: 'profile'
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
