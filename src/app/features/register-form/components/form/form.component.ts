import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegister } from '../../models/interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public userRegisterForm!: FormGroup;
  public submitted: boolean = false;

  @Output() public eventRegistered = new EventEmitter<UserRegister>();

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {}

  public initForm(): void {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(20)]],
    }, {

    })
  }

  public OnSubmit(): void {
    this.submitted = true;
    if ( this.userRegisterForm.valid) {
      const user: UserRegister = {
        name: this.userRegisterForm.get('name')?.value,
        password: this.userRegisterForm.get('password')?.value,
        passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
      }
      this.submitted ? this.userRegisterForm.reset() : '';
      this.submitted = !this.submitted;
    }
  }

  public sendUser(user: UserRegister): void {
    this.eventRegistered.emit(user);
  }
}

