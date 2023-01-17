import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userActionsURL: string = 'http://localhost:8080/api/user';
  allUsersURL: string = 'http://localhost:8080/api/user/all';
  updateUserURL: string = 'http://localhost:8080/api/user/update'

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.allUsersURL)
  }

  public saveUser(user: User) {
    return this.http.post<User>(this.userActionsURL, user)
  }

  public deleteUser(id: number) {
    return this.http.delete(this.userActionsURL + '/' + id)
  }

  public getUserByID(id: number) {
    return this.http.get<User>(this.userActionsURL + '/' + id)
  }

  public updateUser(user: User) {
    return this.http.post<User>(this.updateUserURL, user)
  }
}
