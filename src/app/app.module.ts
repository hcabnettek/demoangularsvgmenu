import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavitemComponent } from './navbar/navitem/navitem.component';
import { DropdownmenuComponent } from './navbar/dropdownmenu/dropdownmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavitemComponent,
    DropdownmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
