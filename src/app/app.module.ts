import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProfileModule } from './profile/profile.module';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    SharedModule,
    ProfileModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
