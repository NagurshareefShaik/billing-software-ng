import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-input',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.css']
})
export class NgInputComponent implements OnInit {
  @Input() class: string;
  @Input() label: string;
  @Input() type: string;
  @Input() model: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
