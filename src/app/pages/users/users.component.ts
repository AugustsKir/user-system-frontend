import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserServiceService} from "../../service/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = []

  constructor(private service: UserServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((response) => {
      this.users = response
    })
  }

  deleteUser(id: number): void {
    this.service.deleteUser(id).subscribe()
    window.location.reload()
  }

  redirectToForm(): void {
    this.router.navigate(['users/new']);
  }

}
