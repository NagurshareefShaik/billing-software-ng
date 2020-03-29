import { Component, OnInit } from '@angular/core';
import { BillingDataService } from './service/billing-data.service';
import { BillingData } from '../model/billingData';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-billing-data',
  templateUrl: './billing-data.component.html',
  styleUrls: ['./billing-data.component.css']
})
export class BillingDataComponent implements OnInit {

  time: string;
  date: string;
  billingData: BillingData[] = [];
  displayedColumns: string[] = ['billNumber', 'billDate', 'totalAmount'];
  dataSource :any;
  constructor(
    private billingDataService: BillingDataService
  ) {
    this.myTimer();
  }

  ngOnInit() {
    this.billingDataService.getBillingDataInfo().subscribe(res => {
      this.dataSource = new MatTableDataSource<BillingData>(res);
    });
  }

  myTimer() {
    var d = new Date();
    this.time = d.toLocaleTimeString();
    this.date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
  }

  showDialog(row) {
    console.log(row);
  }

}
