import { Component, OnInit } from '@angular/core';
import { UserRegister } from './models/interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public registerlist?: UserRegister[];
  UserService: any;

  constructor() { }

  ngOnInit(): void {}

  public setUserRegistered (event: UserRegister): void {
    this.UserService.setUser({name: event.name, password: event.password, passwordrepeat: event.passwordRepeat})
  }
}
