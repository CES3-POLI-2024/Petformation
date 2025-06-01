import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  loginData: Login = {
    username: '',
    password: '',
    logged: false
  };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  showPassword(){
    this.isText = !this.isText;
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        this.router.navigate(['/clientes']);
      },
      error: (error) => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
        console.error('Error de login:', error);
      }
    });
  }

}
