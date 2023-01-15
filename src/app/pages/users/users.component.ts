import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserServiceService} from "../../service/user-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = []

  constructor(private service: UserServiceService) {
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((response) => {
      console.log(response)
      this.users = response
    })
  }

}
