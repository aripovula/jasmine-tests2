import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <button (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`,
  styleUrls: ['./basic.component.css']
})

export class BasicComponent implements OnInit {
  isOn = false;
  constructor() { }

  ngOnInit() {
  }
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
