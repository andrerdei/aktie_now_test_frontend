import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminModel } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public doLogin(admin: AdminModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}auth/authenticate`, admin);
  }
}