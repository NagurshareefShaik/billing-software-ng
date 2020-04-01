import { Component, OnInit } from '@angular/core';
import { BillingDataService } from './service/billing-data.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { BillingData } from 'src/app/model/billingData';
import { BillingItemDialogComponent } from 'src/app/dialogs/billing-item-dialog/billing-item-dialog.component';

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
    private billingDataService: BillingDataService,
    private billingDialog:MatDialog
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
    let dialogRef = this.billingDialog.open(BillingItemDialogComponent, {
      width: '650px', height: '550px',
      data: { billNumber:row.billNumber,billDate:row.billDate,totalAmount:row.totalAmount,billingItems:row.billingItems }
    });
  }

}
