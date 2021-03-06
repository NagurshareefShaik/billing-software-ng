import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseUrl } from './BaseUrl';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { commonText } from './text/common.text';
import { ItemsDialogComponent } from './dialogs/items-dialog/items-dialog.component';
import { BillingItemDialogComponent } from './dialogs/billing-item-dialog/billing-item-dialog.component';
import { BillingPortalComponent } from './container/billing-portal/billing-portal.component';
import { ItemsComponent } from './container/items/items.component';
import { HomePageComponent } from './container/home-page/home-page.component';
import { BillingDataComponent } from './container/billing-data/billing-data.component';
import { BillingDayInfoComponent } from './container/billing-day-info/billing-day-info.component';
import { BillingPortalService } from './container/billing-portal/service/billing-portal.service';
import { BillingDataService } from './container/billing-data/service/billing-data.service';
import { ItemsService } from './container/items/service/items.service';
import { NgButtonComponent } from './components/ng-button/ng-button.component';
import { NgLabelComponent } from './components/ng-label/ng-label.component';
import { NgInputComponent } from './components/ng-input/ng-input.component';
import { NgTableComponent } from './components/ng-table/ng-table.component';
import { NgDivComponent } from './components/ng-div/ng-div.component';
import { NgSpanComponent } from './components/ng-span/ng-span.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingPortalComponent,
    ItemsComponent,
    HomePageComponent,
    BillingDataComponent,
    BillingDayInfoComponent,
    ItemsDialogComponent,
    BillingItemDialogComponent,
    NgButtonComponent,
    NgLabelComponent,
    NgInputComponent,
    NgTableComponent,
    NgDivComponent,
    NgSpanComponent
  ],
  entryComponents: [ItemsDialogComponent, BillingItemDialogComponent],
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
    ItemsService,
    BaseUrl,
    commonText
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
