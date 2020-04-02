import { Component, OnInit, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.css']
})
export class NgTableComponent implements OnInit {
  @Input() tableData:any;
  @Input() displayedColumns: Object;
  objectKeys = Object.keys;
  dataSource:any;
  // @Output() rowClick: EventEmitter = new EventEmitter();
  data:any;

  constructor() { }

  ngOnInit() {
    this.tableData.subscribe(res=>{
      this.dataSource = new MatTableDataSource(res);
    });
  }

  methodCall(event){
    this.data=event;
    // this.rowClick.emit(this.data);
    console.log(event);
  }


}
