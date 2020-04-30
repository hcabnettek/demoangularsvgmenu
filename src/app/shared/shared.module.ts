import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrimPipe } from './pipes/trim.pipe';



@NgModule({
  declarations: [TrimPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, FormsModule, TrimPipe
  ]
})
export class SharedModule { }
