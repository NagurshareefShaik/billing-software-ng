import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-billing-portal',
  templateUrl: './billing-portal.component.html',
  styleUrls: ['./billing-portal.component.css']
})

export class BillingPortalComponent implements OnInit {
  @ViewChild('itemCode',{static:false}) itemCode:ElementRef<any>;
time:string;
date:string;
billNumber:number;

  constructor() {
    setInterval(()=>{this.myTimer();},1000);
   }

  ngOnInit() {
    
  }

  save(){
    let code=this.itemCode.nativeElement;
    alert(code.value);
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


