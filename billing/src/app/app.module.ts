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
import { HttpClientModule } from '@angular/common/http';
import { BaseUrl } from './BaseUrl';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {commonText} from './text/common.text';
import { ItemsDialogComponent } from './dialogs/items-dialog/items-dialog.component';
import { BillingItemDialogComponent } from './dialogs/billing-item-dialog/billing-item-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingPortalComponent,
    AddItemsComponent,
    HomePgeComponent,
    BillingDataComponent,
    BillingDayInfoComponent,
    ItemsDialogComponent,
    BillingItemDialogComponent
  ],
  entryComponents:[ItemsDialogComponent,BillingItemDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  providers: [
    BillingPortalService,
    BillingDataService,
    AddItemsService,
    BaseUrl,
    commonText
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
