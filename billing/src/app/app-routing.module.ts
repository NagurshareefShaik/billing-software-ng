import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePgeComponent } from './home-pge/home-pge.component';
import { BillingPortalComponent } from './billing-portal/billing-portal.component';
import { BillingDataComponent } from './billing-data/billing-data.component';
import { AddItemsComponent } from './add-items/add-items.component';


const routes: Routes = [
  {path:'',component:HomePgeComponent},
  {path:'home-page',component:HomePgeComponent},
  {path:'billing-portal',component:BillingPortalComponent},
  {path:'billing-data',component:BillingDataComponent},
  {path:'add-items',component:AddItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
