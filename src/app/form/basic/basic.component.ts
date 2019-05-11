import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <button (click)="clicked()">Click me!</button>
    <input
      id="aCheckBox"
      type="checkbox"
      [checked]="saveUsername"
      (change)="saveUsername = !saveUsername"
    />
    <div><span>{{message}}</span><span>{{message}}</span></div>`,
  styleUrls: ['./basic.component.css']
})

export class BasicComponent implements OnInit {
  isOn = false;
  isChecked = false;
  constructor() { }

  ngOnInit() {
  }
  clicked() { this.isOn = !this.isOn; }
  checked() { this.isChecked = !this.isChecked; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  get message2() { return `The light is ${this.isChecked ? 'On' : 'Off'}`; }
}
