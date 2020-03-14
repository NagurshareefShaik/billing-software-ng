import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
itemQuanity:number;

  constructor() {
    setInterval(()=>{this.myTimer();},1000);
   }

  ngOnInit() {
    
  }

  save(){
    
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
}


