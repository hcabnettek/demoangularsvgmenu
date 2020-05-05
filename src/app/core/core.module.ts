import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';
import { NavitemComponent } from './navbar/navitem/navitem.component';
import { DropdownmenuComponent } from './navbar/dropdownmenu/dropdownmenu.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { Constants } from '../shared/constants';
import * as utils from './utils';

//import { AuthService } from './auth-service.component';
//import { EventBusService } from './services/event-bus.service';
//import { AuthInterceptor } from './interceptors/auth.interceptor';
const stsSettings = {
  authority: Constants.stsAurhority,
  clientId: Constants.clientId,
  redirectUri: `${Constants.clientRoot}signin-callback`,
  pkce: true,
  scopes: ['openid', 'profile', 'email'],
  responseType: ['code'], //id_token token
  postLogoutRedirectUri: ``,
  issuer: 'https://dev-200299.okta.com/oauth2/default',
  testing: {
    disableHttpsCheck: true
  },
  code_challenge_method: 'S256',
  //code_challenge: this.code_challenge,
  metadata: {
    issuer: `${Constants.stsAurhority}`,
    authorization_endpoint: `${Constants.stsAurhority}authorize`,
    token_endpoint:`${Constants.stsAurhority}token`,
    userinfo_endpoint: `${Constants.stsAurhority}userinfo`,
    end_session_endpoint:``,
    code_challenge_method: 'S256',
    code_challenge: utils.generateCodeChallenge(utils.generateRandomString(128)),
  }


}

@NgModule({
  declarations: [NavbarComponent, NavitemComponent, DropdownmenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    OktaAuthModule
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
    { provide: 'Window', useFactory: () => window },
    { provide: OKTA_CONFIG, useValue: stsSettings }

  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard{
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
