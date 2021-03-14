import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AdminService {
  private token: string;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.authService.token.subscribe(res => this.token = res);
  }

  getData() {
    const url = `${environment.API_URL}/home`;
    return this.http.get(url,{
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': 'Bearer ' + this.token, 'Content-Type' : 'application/json', 'Content-Length': '200'})
    });
  }

}
