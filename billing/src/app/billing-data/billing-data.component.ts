import { Component, OnInit } from '@angular/core';
import { BillingDataService } from './service/billing-data.service';
import { BillingData } from '../model/billingData';

@Component({
  selector: 'app-billing-data',
  templateUrl: './billing-data.component.html',
  styleUrls: ['./billing-data.component.css']
})
export class BillingDataComponent implements OnInit {

  time:string;
  date:string;
  billingData:BillingData[]=[];
  constructor(
    private billingDataService:BillingDataService
  ) {
    this.myTimer();
   }

  ngOnInit() {
    this.billingDataService.getBillingDataInfo().subscribe(res=>{
      this.billingData=res;
    });
  }

  myTimer() {
    var d = new Date();
    this.time = d.toLocaleTimeString();
    this.date=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
  }

}
