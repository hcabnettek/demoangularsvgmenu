import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angulardemo';
  isLoggedIn = false;
  isAuthenticated = false;

  constructor(private authService: AuthService) {
   // subscribe to authentication state changes
   this.authService.isAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);

  }

  async ngOnInit(): Promise<void> {
   // this._authService.isLoggedIn().then(loggedIn =>{
   //   this.isLoggedIn = loggedIn
   // })

   this.isAuthenticated = await this.authService.isAuthenticatedPromise();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
