import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 //import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
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
    //debo import esta ruta en el modulo Profile
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    //component: ProfilePageComponent
  },
  {
    path: 'profil',
    redirectTo: 'profile'
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  },
  {
    path: '**',
    redirectTo: '/'
    //component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
