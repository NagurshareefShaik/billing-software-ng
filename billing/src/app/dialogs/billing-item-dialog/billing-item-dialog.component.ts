import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { BillingItems } from 'src/app/model/billingItem';

@Component({
  selector: 'app-billing-item-dialog',
  templateUrl: './billing-item-dialog.component.html',
  styleUrls: ['./billing-item-dialog.component.css']
})
export class BillingItemDialogComponent implements OnInit {
  displayedColumns: string[] = ['itemCode', 'itemName', 'itemQuantity', 'itemPrice','totalPrice'];
  dataSource = new MatTableDataSource<BillingItems>(this.billingData.billingItems);
  billNumber:number=this.billingData.billNumber;
  billDate:string=this.billingData.billDate;
  totalAmount:number=this.billingData.totalAmount;
  constructor(@Inject(MAT_DIALOG_DATA) public billingData: any) { }

  ngOnInit() {
  }

}
