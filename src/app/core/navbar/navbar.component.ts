import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

//import { AuthService } from '../services/auth.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  loginLogoutText = 'Login';
  sub: Subscription;

  constructor(private router: Router) { }

  ngOnDestroy(): void {
     this.sub.unsubscribe();
  }

  ngOnInit(): void {
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

}
