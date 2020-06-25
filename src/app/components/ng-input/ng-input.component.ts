import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ng-input',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgInputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() model: any;
  @Input() icon: string;
  @Input() readonly: boolean;
  @Output() value = new EventEmitter();

  constructor() { }

  valuechange(value) {
    this.value.emit(value);
  }


  ngOnInit() {
  }

}
