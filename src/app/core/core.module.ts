import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';
import { NavitemComponent } from './navbar/navitem/navitem.component';
import { DropdownmenuComponent } from './navbar/dropdownmenu/dropdownmenu.component';

//import { AuthService } from './services/auth.service';
//import { EventBusService } from './services/event-bus.service';
//import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [NavbarComponent, NavitemComponent, DropdownmenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    NavbarComponent,
    NavitemComponent,
    DropdownmenuComponent
  ],
  providers: [
    //SorterService, 
    //FilterService, 
    //DataService, 
    //TrackByService,
    //DialogService, 
    //AuthService, 
    //EventBusService,
   // {
     // provide: HTTP_INTERCEPTORS,
     // useClass: AuthInterceptor,
     // multi: true,
   // },
    { provide: 'Window', useFactory: () => window }
  ] 
})
export class CoreModule extends EnsureModuleLoadedOnceGuard{
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
