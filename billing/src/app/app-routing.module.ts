import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePgeComponent } from './container/home-pge/home-pge.component';
import { BillingPortalComponent } from './container/billing-portal/billing-portal.component';
import { BillingDataComponent } from './container/billing-data/billing-data.component';
import { BillingDayInfoComponent } from './container/billing-day-info/billing-day-info.component';
import { AddItemsComponent } from './container/add-items/add-items.component';


const routes: Routes = [
  {path:'',component:HomePgeComponent},
  {path:'home-page',component:HomePgeComponent},
  {path:'billing-portal',component:BillingPortalComponent},
  {path:'billing-data',component:BillingDataComponent},
  {path:'add-items',component:AddItemsComponent},
  {path:'day-billing-info',component:BillingDayInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
