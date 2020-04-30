import { Injectable, OnInit } from '@angular/core';
import { CoreModule } from './core.module';
import { User, UserManager } from 'oidc-client';
import { Constants } from '../shared/constants';
import { Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';
//import sha256 from 'crypto-js/sha256';
//import hmacSHA512 from 'crypto-js/hmac-sha512';
//import Base64 from 'crypto-js/enc-base64';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthService,
} from '@okta/okta-angular';

@Injectable({providedIn: CoreModule})
export class AuthService implements OnInit {

  private _userManager: UserManager
  private _user: User
  private _loginChangedSubject = new Subject<boolean>()

  loginChanged$ = this._loginChangedSubject.asObservable()
  isAuthenticated: boolean;
  oidcUser: User;
  initialized: any;


  constructor(public oktaAuth: OktaAuthService) {
    const code_verifier = this.generateRandomString(128)
    const code_challenge = this.generateCodeChallenge(code_verifier)


    const stsSettings = {
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


    }

    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);

    this._userManager = new UserManager(stsSettings);
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
   // return this._userManager.signinRedirect();
   return  this.oktaAuth.loginRedirect();
  }

  logout() {
    //return this._userManager.signinRedirect();
    return  this.oktaAuth.logout('/')
  }

  isLoggedIn(): Promise<boolean> {
    return this._userManager.getUser().then(user => {
      const userCurrent = !!user && !user.expired
      if (this._user !== user) {
        this._loginChangedSubject.next(userCurrent)
      }
      return userCurrent
    })
  }

  initSession(): Promise<User> {
    return this._userManager.getUser().then(user => {
      if (user && !user.expired) {
        this.oidcUser = user;
        if (!this.initialized) {
          // load user profile, client security context, permissions, etc.
          this.initialized = true;
        }
        return user;
      }
      else { this._userManager.signinRedirect(); }
    });
}

  generateRandomString(length: number) :string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  generateCodeChallenge(code_verifier :string) :string {
    return this.base64URL(CryptoJS.SHA256(code_verifier))
  }

  base64URL(val:any) {
    return val.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  }




}
