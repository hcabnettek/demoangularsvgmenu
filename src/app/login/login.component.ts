import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { AuthService } from '../core/services/auth.service';
//import { ValidationService } from '../core/services/validation.service';
import { IUserLogin } from '../shared/interfaces';
//import { LoggerService } from '../core/services/logger.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
        email:      ['', [ Validators.required /*, ValidationService.emailValidator */]],
        password:   ['', [ Validators.required,/* ValidationService.passwordValidator */ ]]
    });
  }

  submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
    
  }

}
