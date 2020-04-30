import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [LoginRoutingModule.components],
  imports: [
    ReactiveFormsModule, 
    SharedModule, 
    LoginRoutingModule,
    StoreModule.forFeature('login',{})
  ]
})
export class LoginModule { }
