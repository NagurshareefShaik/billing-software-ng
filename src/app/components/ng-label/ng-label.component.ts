import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-label',
  templateUrl: './ng-label.component.html',
  styleUrls: ['./ng-label.component.css']
})
export class NgLabelComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
