import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angulardemo';
  isLoggedIn = false
  isAuthenticated = false

  constructor(private _authService: AuthService) {
   // subscribe to authentication state changes
   this._authService.isAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);

  }

  async ngOnInit(): Promise<void> {
   // this._authService.isLoggedIn().then(loggedIn =>{
   //   this.isLoggedIn = loggedIn
   // })

   this.isAuthenticated = await this._authService.isAuthenticatedPromise();
  }

  login() {
    this._authService.login()
  }

  logout() {
    this._authService.logout()
  }
}
