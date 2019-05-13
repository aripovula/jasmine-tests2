import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ReactiveComponent } from './reactive.component';
import { AppComponent } from 'src/app/app.component';
import { BasicComponent } from '../basic/basic.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async(() => {
    configureTestingMod();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async(() => {
    configureTestingMod();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a `FormGroup`', () => {
    component.ngOnChanges();
    expect(component.formGroup instanceof FormGroup).toBe(true);
  });

  it('should create a `FormControl` for each question', () => {
    component.questions = [
      {
        controlType: 'text',
        id: 'first',
        label: 'My First',
        required: false
      },
      {
        controlType: 'text',
        id: 'second',
        label: 'Second!',
        required: true
      }
    ];
    component.ngOnChanges();

    expect(Object.keys(component.formGroup.controls)).toEqual([
      'first', 'second'
    ]);
  });

  it('should set the `payload` to a stringified version of our form values', () => {
    component.questions = [
      {
        controlType: 'text',
        id: 'first',
        label: 'My First',
        required: false
      },
      {
        controlType: 'text',
        id: 'second',
        label: 'Second!',
        required: true
      }
    ];
    component.ngOnChanges();

    component.formGroup.controls['first'].setValue('pizza');
    component.submit();

    expect(component.payload).toEqual(JSON.stringify({ first: 'pizza', second: '' }, null, 4));
  });
});

const configureTestingMod = () => {
  TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      BasicComponent,
      ReactiveComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: []
  })
    .compileComponents();
};
