import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://localhost:7173/api/User/';
  // private baseUrl: string = 'https://localhost:7173/swagger/v1/swagger.json';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }
  // signUp() {
  //   return this.http.get<any>(this.baseUrl);
  // }
}

// https://localhost:7173/api/User/register
// https://localhost:7173/swagger/v1/swagger.json