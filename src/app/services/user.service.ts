import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userUrl: string = "http://localhost:3000/users"

  constructor(private httpClient: HttpClient) { }

  login(obj) {
    return this.httpClient.post<{message:String}>(this.userUrl +"/signin", obj);
  }

  signup(obj) {
    return this.httpClient.post<{message:String}>(this.userUrl +"/subscription", obj);
  }

  editProfile(newUser) {
    return this.httpClient.put(this.userUrl, newUser);
  }

}
