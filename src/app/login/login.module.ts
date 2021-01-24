import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service'

@NgModule({
  declarations: [LoginComponent],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [],

  providers: [
    HttpClientModule,
    LoginService
  ]
})

export class LoginModule { }
