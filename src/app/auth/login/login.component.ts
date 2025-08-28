import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {//clase que representa el inicio de sesion
  loginForm: FormGroup;//objeto

  constructor(private fb: FormBuilder,private authService: AuthService,private router:Router) {//Inyectamos las dependencias
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.valid){
      const formData=this.loginForm.value;

      this.authService.login(formData).subscribe({
        next:(response)=>{
          //Guardamos el token en local storage
          this.authService.saveToken(response.token);

          //Redirigimos a la vista del dashboard
          this.router.navigate(['/dashboard']);

        },
        error:(error)=>{
          //Si falla el login
          console.error('Error al iniciar sesison',error);
          alert('Correo o contraseña invalidos');

        }
      });      
    }else{
      this.loginForm.markAllAsTouched(); //Marca todos los errores del form

    }
  }
}




