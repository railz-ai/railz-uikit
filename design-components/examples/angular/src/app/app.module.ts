import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RailzUikitModule} from "@railzai/railz-uikit-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RailzUikitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
