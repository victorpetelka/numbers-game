import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './components/numbers/numbers.component';



@NgModule({
  declarations: [
    NumbersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent
  ]
})
export class NumbersModule { }
