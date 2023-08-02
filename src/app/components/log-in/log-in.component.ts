import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SignupService } from 'src/app/services/signup.service';
import { AuthService } from 'src/app/services/auth.service';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {
  constructor(private loginService: LoginService, private signUpService: SignupService, private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const isLoggedIn = this.authService.isLoggedIn()

    if (isLoggedIn) this.router.navigateByUrl('/home');
  }

  get email() {
    return this.userForm.get('email') as FormControl;
  }

  get password() {
    return this.userForm.get('password') as FormControl;
  }

  get fullName() {
    return this.userForm.get('fullName') as FormControl;
  }

  userForm = this.formBuilder.group({
    fullName: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  type = 'login';


  changeType(value: string) {
    this.type = value

    if (this.type === 'signup') {
      this.fullName.setValidators(Validators.required);
      this.password.setValidators([Validators.required,Validators.pattern(/^(?=.*\d).{8,}$/)])
    }
    else {
      this.password.removeValidators(Validators.pattern(/^(?=.*\d).{8,}$/));
      this.fullName.clearValidators();
    }

    this.fullName.updateValueAndValidity();
    this.password.updateValueAndValidity();
  }

  getErrorMessage(control: FormControl | null): string {
    if (control?.hasError('required') && control.touched) return 'Required field'
    if (control?.hasError('email') && control.touched) return 'Invalid email format'
    if (control?.hasError('pattern') && control.touched && this.type === "signup")
      return 'The password must be at least 8 characters long and contain at least one number.'
    return ''
  }

  logIn() {
    this.loginService.login(this.email.value, this.password.value).subscribe((res) => { console.log({ res }) });
  }

  register() {
    this.signUpService.signup(this.fullName.value, this.email.value, this.password.value).subscribe((sign) => { console.log({ sign }) });
  }

  onSubmit() {
    if (this.type === 'login') {
      return this.logIn()
    }

    return this.register();

  }

}
