import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { Constants } from './shared/constants';

/*const stsSettings = {
  authority: Constants.stsAurhority,
  clientId: Constants.clientId,
  redirectUri: `${Constants.clientRoot}signin-callback`,
  pkce: true,
  scope: 'openid profile email',
  responseType: ['code'], //id_token token
  postLogoutRedirectUri: `${Constants.clientRoot}signout-callback`,
  issuer: 'https://dev-200299.okta.com/oauth2/default',
  testing: {
    disableHttpsCheck: true
  }


}*/

const routes: Routes = [
  {
    path: 'signin-callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
   // { provide: OKTA_CONFIG, useValue: stsSettings },
  ],
})
export class AppRoutingModule { }
