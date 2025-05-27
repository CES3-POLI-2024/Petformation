import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  showPassword(){
    this.isText = !this.isText;
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        // Guarda el token en el almacenamiento local o redirige
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Error de login:', error);
      }
    });
  }

}
