import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingPortalComponent } from './billing-portal/billing-portal.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { HomePgeComponent } from './home-pge/home-pge.component';
import { BillingDataComponent } from './billing-data/billing-data.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingPortalComponent,
    AddItemsComponent,
    HomePgeComponent,
    BillingDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
