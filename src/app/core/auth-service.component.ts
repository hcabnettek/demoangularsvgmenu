import { Injectable, OnInit } from '@angular/core';
import { CoreModule } from './core.module';
//import { User, UserManager } from 'oidc-client';
import { Constants } from '../shared/constants';
//import { Subject } from 'rxjs';

import {
  OktaAuthService,
} from '@okta/okta-angular';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'/*CoreModule*/})
export class AuthService implements OnInit {

  private code_challenge: string;
  private code_verifier: string;


  constructor(private oktaAuth: OktaAuthService) {
   // this.code_verifier = this.generateRandomString(128)
   // this.code_challenge = this.generateCodeChallenge(this.code_verifier)




    //this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);


  }

  ngOnInit() {
    //this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
   // return this._userManager.signinRedirect();
    return  this.oktaAuth.loginRedirect();
  }

  logout() {
    //return this._userManager.signinRedirect();
    return  this.oktaAuth.logout('/')
  }

  isAuthenticated(): Observable<boolean> {
    return this.oktaAuth.$authenticationState
  }

  isAuthenticatedPromise(): Promise<boolean> {
    return this.oktaAuth.isAuthenticated()
  }






}
