import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUserLogin } from '../shared/interfaces';
import { AuthService } from '../core/auth-service.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authservice: AuthService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
        email:      ['', [ Validators.required /*, ValidationService.emailValidator */]],
        password:   ['', [ Validators.required, /* ValidationService.passwordValidator */ ]]
    });
  }

  submit({ value, valid }: { value: IUserLogin, valid: boolean }) {

  }

  doLogin() {
    this.authservice.login();
  }

}
