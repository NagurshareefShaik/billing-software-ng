import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingPortalComponent } from './billing-portal/billing-portal.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { HomePgeComponent } from './home-pge/home-pge.component';
import { BillingDataComponent } from './billing-data/billing-data.component';
import { BillingDayInfoComponent } from './billing-day-info/billing-day-info.component';
import { BillingPortalService } from './billing-portal/service/billing-portal.service';
import { BillingDataService } from './billing-data/service/billing-data.service';
import { AddItemsService } from './add-items/service/add-items.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseUrl } from './BaseUrl';

@NgModule({
  declarations: [
    AppComponent,
    BillingPortalComponent,
    AddItemsComponent,
    HomePgeComponent,
    BillingDataComponent,
    BillingDayInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BillingPortalService,
    BillingDataService,
    AddItemsService,
    BaseUrl
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
