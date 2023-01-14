import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userActionsURL: string;
  private readonly allUsersURL: string;
  constructor(private http: HttpClient) {
    this.userActionsURL = 'http://localhost:8080/user';
    this.allUsersURL = 'http://localhost:8080/user/all'
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.allUsersURL)
  }
  public saveUser(user: User) {
    return this.http.post<User>(this.userActionsURL, user)
  }
  public deleteUser(user: User) {
    // @ts-ignore
    return this.http.delete<User>(this.userActionsURL, user)
  }
}
