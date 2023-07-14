import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NumbersModule} from "./modules/game/numbers.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NumbersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
