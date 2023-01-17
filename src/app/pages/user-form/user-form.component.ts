import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserServiceService} from "../../service/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm?: FormGroup

  constructor(private fb: FormBuilder, private service: UserServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.buildUserForm()
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
    this.service.saveUser(this.userForm?.value).subscribe()
    this.router.navigate(['users']).then(() => {
      window.location.reload()
    });
  }

}
