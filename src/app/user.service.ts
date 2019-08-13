import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const baseUrl = 'https://insta.nextacademy.com/api/v1'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${baseUrl}/users`)
  }

  getUserImages(userId: number) {
    return this.http.get(`${baseUrl}/images?userId=${userId}`)
  }
}
