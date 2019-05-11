import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { BasicComponent } from './basic.component';


describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('LightswitchComp', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new BasicComponent();
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new BasicComponent();
    expect(comp.message).toMatch(/is off/i, 'off at first');
    comp.clicked();
    expect(comp.message).toMatch(/is on/i, 'on after clicked');
    comp.clicked();
    expect(comp.message).toMatch(/is off/i, 'off after clicked');

  });

  it('#checked() should set #message2 to "is Checked"', () => {
    const comp = new BasicComponent();
    expect(comp.message2).toMatch(/is off/i, 'off at first');
    comp.checked();
    expect(comp.message2).toMatch(/is on/i, 'on after clicked');
    comp.checked();
    expect(comp.message2).toMatch(/is off/i, 'off after clicked');

  });

  it('should click change value', () => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BasicComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule
      ],
      providers: [],
    }).compileComponents();

    const fixture = TestBed.createComponent(BasicComponent);
    // const component = fixture.componentInstance;

    const input = fixture.debugElement.query(By.css('#aCheckBox')).nativeElement;
    expect(input.checked).toBeFalsy(); // default state

    input.click();
    fixture.detectChanges();

    expect(input.checked).toBeTruthy(); // state after click
  });

});

