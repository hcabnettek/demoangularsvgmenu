import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OktaCallbackComponent
} from '@okta/okta-angular';
import { Constants } from './shared/constants';
import { ShellComponent } from './shell/shell.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

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
  },
  {
    path: 'signout-callback',
    component: OktaCallbackComponent
  },

  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'profiles', component: ProfileComponent},
      { path: '', redirectTo: 'profiles', pathMatch: 'full'}
    ]
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProfileModule, LoginModule],
  exports: [RouterModule],
  providers: [
   // { provide: OKTA_CONFIG, useValue: stsSettings },
  ],
})
export class AppRoutingModule { }
