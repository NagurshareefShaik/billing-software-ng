import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgTableComponent implements OnInit {
  @Input() tableData: any;
  @Input() displayedColumns: Object;
  objectKeys = Object.keys;
  @Output() rowClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  methodCall(event: any) {
    this.rowClick.emit(event);
  }


}
