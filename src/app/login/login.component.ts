import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModel } from './models/admin.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: AdminModel = new AdminModel();

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public doLogin() {
    this.loginService.doLogin(this.admin).subscribe(
      (adminData) => {
        const accessToken = adminData.token
        window.localStorage.setItem("accessToken",  accessToken)
        
        this.router.navigate(['/collection']);
  
      }, (err) => {
        console.log(err);
        alert('Failed to login!');
        this.admin = new AdminModel();
      }
    );
  }

}
