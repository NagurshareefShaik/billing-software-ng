import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BillingPortalService } from './service/billing-portal.service';
import { Items } from '../model/items';
import { MatSnackBar, MatTableDataSource, MatPaginator } from '@angular/material';
import { commonText } from '../text/common.text';
import { BillingItems } from '../model/billingItem';
import { BillingData } from '../model/billingData';

@Component({
  selector: 'app-billing-portal',
  templateUrl: './billing-portal.component.html',
  styleUrls: ['./billing-portal.component.css']
})

export class BillingPortalComponent implements OnInit {
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
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
displayedColumns: string[] = ['itemCode', 'itemName', 'itemQuantity', 'itemPrice'];
  dataSource = new MatTableDataSource<BillingItems>(this.billingDataList);
  constructor(
    private billingService:BillingPortalService,
    private snackBar:MatSnackBar,
    private text:commonText
  ) {
    setInterval(()=>{this.myTimer();},1000);
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  save(){
    if(this.billingDataList.length>0){
      this.billingData.billNumber=this.billNumber;
      this.billingData.billDate=new Date().toLocaleDateString();
      this.billingData.totalAmount=this.totalAmount;
      this.billingData.billingItems=this.billingDataList;
      this.billingService.saveBillingData(this.billingData).subscribe((res)=>{
        this.showSnackBar(this.text.dataSaveMessage,"save");
      });
      
    }
    else{
      this.showSnackBar(this.text.noDataMessage,"");
    }
  }

  print(){
window.print();
  }

  myTimer() {
    var d = new Date();
    this.time = d.toLocaleTimeString();
    this.date=d.toLocaleDateString();
    this.billNumber=2;
  }

  quantityChange(){
    if(this.itemQuantiyValue&&this.itemNameValue){
      this.billingItems['itemCode']=this.itemCodeValue;
      this.billingItems['itemName']=this.itemNameValue;
      this.billingItems['itemQuantity']=this.itemQuantiyValue;
      this.billingItems['itemPrice']=this.itemQuantiyValue*this.itemPriceValue;
      this.billingDataList.push(this.billingItems);
      this.dataSource = new MatTableDataSource<BillingItems>(this.billingDataList);
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
          if(this.itemQuantiyValue){
            this.quantityChange();
          }
        }
        else{
          this.showSnackBar(this.text.noDataFound,"itemChange");
        }
      });
  }
 
  }
  showSnackBar(message:string,action:string){
    let snackRef=this.snackBar.open(message,this.text.closeLabel,{
      duration: 2000,
    });
    snackRef.afterDismissed().subscribe(()=>{
      this.snackBar.dismiss();
    });
    if(action==="save"){
      snackRef.afterOpened().subscribe(()=>{
        this.billingDataList=[];
        this.totalAmount=0;
      });
    }else{
      snackRef.afterOpened().subscribe(()=>{
        this.billingDataList=[];
        this.totalAmount=0;
      });
    }
  }

}