import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseUrl } from './BaseUrl';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {commonText} from './text/common.text';
import { ItemsDialogComponent } from './dialogs/items-dialog/items-dialog.component';
import { BillingItemDialogComponent } from './dialogs/billing-item-dialog/billing-item-dialog.component';
import { BillingPortalComponent } from './container/billing-portal/billing-portal.component';
import { AddItemsComponent } from './container/add-items/add-items.component';
import { HomePgeComponent } from './container/home-pge/home-pge.component';
import { BillingDataComponent } from './container/billing-data/billing-data.component';
import { BillingDayInfoComponent } from './container/billing-day-info/billing-day-info.component';
import { BillingPortalService } from './container/billing-portal/service/billing-portal.service';
import { BillingDataService } from './container/billing-data/service/billing-data.service';
import { AddItemsService } from './container/add-items/service/add-items.service';
import { NgButtonComponent } from './components/ng-button/ng-button.component';
import { NgLabelComponent } from './components/ng-label/ng-label.component';
import { NgInputComponent } from './components/ng-input/ng-input.component';
import { NgTableComponent } from './components/ng-table/ng-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingPortalComponent,
    AddItemsComponent,
    HomePgeComponent,
    BillingDataComponent,
    BillingDayInfoComponent,
    ItemsDialogComponent,
    BillingItemDialogComponent,
    NgButtonComponent,
    NgLabelComponent,
    NgInputComponent,
    NgTableComponent
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
