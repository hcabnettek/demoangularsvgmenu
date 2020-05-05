import { Component, OnInit, OnDestroy, ContentChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { NavitemComponent } from './navitem/navitem.component';

//import { AuthService } from '../services/auth.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @ContentChild(TemplateRef) navBtn: TemplateRef<NavitemComponent>;
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
