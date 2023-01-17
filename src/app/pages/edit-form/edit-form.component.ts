import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserServiceService} from "../../service/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  userForm?: FormGroup
  user!: User
  id: number

  constructor(private fb: FormBuilder, private service: UserServiceService, private router: Router, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.buildUserForm()
    this.service.getUserByID(this.id).subscribe((response) => {
      this.user = response
    })
  }

  buildUserForm(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      name: ['', [Validators.required, Validators.pattern(/[a-zA-Z][a-zA-Z ]/)]],
      age: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      password: [''],
      userID: ['']
    })
  }

  sendData(): void {
    this.service.updateUser(this.userForm?.value).subscribe()
    this.router.navigate(['users']).then(() => {
      window.location.reload()
    });
  }

}
