import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: boolean = false;
  private accessToken: string = window.localStorage.getItem('accessToken');

  constructor(private router: Router) { }

  public checkUserAuthentication() {
    if (this.accessToken) {
      this.authenticatedUser = true;

    } else{
      this.authenticatedUser = false;
    }

    return this.authenticatedUser;
  }
}
