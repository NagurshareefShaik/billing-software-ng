import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './container/home-page/home-page.component';
import { BillingPortalComponent } from './container/billing-portal/billing-portal.component';
import { BillingDataComponent } from './container/billing-data/billing-data.component';
import { BillingDayInfoComponent } from './container/billing-day-info/billing-day-info.component';
import { ItemsComponent } from './container/items/items.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'billing-portal',component:BillingPortalComponent},
  {path:'billing-data',component:BillingDataComponent},
  {path:'add-items',component:ItemsComponent},
  {path:'day-billing-info',component:BillingDayInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
