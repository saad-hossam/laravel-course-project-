import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      Password: ['',[Validators.required,]]
    });
  }

  submitGameForm() {
    console.log(this.loginForm);
  }
  redirectToHome(){ 
    this.router.navigate(['/' ])
  }
  redirectToRegister(){
    this.router.navigate(['/register' ])

  }
}
