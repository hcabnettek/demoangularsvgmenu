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
    this._authService.loginChanged$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn
    })

  }

  ngOnInit(): void {
    this._authService.isLoggedIn().then(loggedIn =>{
      this.isLoggedIn = loggedIn
    })
  }

  login() {
    this._authService.login()
  }

  logout() {
    this._authService.logout()
  }
}
