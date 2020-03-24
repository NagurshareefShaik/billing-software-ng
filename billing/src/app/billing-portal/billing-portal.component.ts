import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BillingPortalService } from './service/billing-portal.service';
import { Items } from '../model/items';
import { MatSnackBar } from '@angular/material';
import { commonText } from '../text/common.text';
import { BillingItems } from '../model/billingItem';
import { BillingData } from '../model/billingData';

@Component({
  selector: 'app-billing-portal',
  templateUrl: './billing-portal.component.html',
  styleUrls: ['./billing-portal.component.css']
})

export class BillingPortalComponent implements OnInit {
time:string;
date:string;
billNumber:number;
itemCodeValue:number;
itemNameValue:string;
itemPriceValue:number;
itemQuantiyValue:number;
totalAmount:number;
billingItems:BillingItems=new BillingItems;
billingDataList:BillingItems[]=[];
billingData:BillingData=new BillingData;

  constructor(
    private billingService:BillingPortalService,
    private snackBar:MatSnackBar,
    private text:commonText
  ) {
    setInterval(()=>{this.myTimer();},1000);
   }

  ngOnInit() {
    
  }

  save(){
      this.billingData.billNumber=this.billNumber;
      this.billingData.billDate=new Date().toLocaleDateString();
      this.billingData.billAmount=this.totalAmount;
      this.billingData.billingItems=this.billingDataList;
      this.billingService.saveBillingData(this.billingData).subscribe(()=>{

      });

  }

  print(){
window.print();
  }

  myTimer() {
    var d = new Date();
    this.time = d.toLocaleTimeString();
    this.date=d.toLocaleDateString();
    this.billNumber=1;
  }

  quantityChange(){
    if(this.itemQuantiyValue&&this.itemNameValue){
      this.billingItems['itemCode']=this.itemCodeValue;
      this.billingItems['itemName']=this.itemNameValue;
      this.billingItems['itemQuantity']=this.itemQuantiyValue;
      this.billingItems['itemPrice']=this.itemQuantiyValue*this.itemPriceValue;
      this.billingDataList.push(this.billingItems);
      this.billingItems=new BillingItems;
      this.resetData();
      this.updateAmount();
    }
  }
  updateAmount() {
    this.totalAmount=0;
    this.billingDataList.forEach(res=>{
    this.totalAmount+=res.itemPrice;
    });
  }
  resetData(){
    this.itemCodeValue=null;
    this.itemNameValue="";
    this.itemQuantiyValue=null;
    this.itemPriceValue=null;
  }
  itemChange(){
    if(this.itemCodeValue){
      const data:Items=new Items();
      data['itemCode']=this.itemCodeValue;
      data['itemName']=this.itemNameValue;
      data['itemPrice']=this.itemPriceValue;
      this.billingService.getItemData(data).subscribe(res=>{
        if(res['itemName']){
          this.itemNameValue=res['itemName'];
          this.itemPriceValue=res['itemPrice'];
        }
        else{
          let snackRef=this.snackBar.open(this.text.noDataFound,this.text.closeLabel);
            snackRef.afterDismissed().subscribe(()=>{
              this.snackBar.dismiss();
            });
            snackRef.afterOpened().subscribe(()=>{
              this.itemNameValue="";
              this.itemPriceValue=null;
            });
        }
      });
  }



  }
}