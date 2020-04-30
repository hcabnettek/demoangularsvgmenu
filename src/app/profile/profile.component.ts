import { Component, OnInit } from '@angular/core';
import { IClaim } from '../shared/interfaces';
import { AuthService } from '../core/auth-service.component';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  idToken: string;
  claims: Array<IClaim>;

  constructor(public authService: AuthService, public oktaAuth: OktaAuthService) {

  }

  async ngOnInit(): Promise<void> {
    const userClaims = await this.oktaAuth.getUser();
    this.claims = Object.entries(userClaims).map(entry => ({ claim: entry[0], value: entry[1] }));
  }

}
