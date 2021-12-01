import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup = this.formBuilder.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  /**
   * login
   */
  public login() {
    console.log(this.myForm.value);
    console.log(this.myForm.valid);

    this.router.navigateByUrl('/dashboard');
  }
}
