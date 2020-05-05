import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IClaim {
  claim: string;
  value: string;
}
