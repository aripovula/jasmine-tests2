import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './form/basic/basic.component';
import { ReactiveComponent } from './form/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
