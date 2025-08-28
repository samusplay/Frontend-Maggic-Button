import { HttpClient } from '@angular/common/http'; //Get,Post
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


//Modelo de datos del formulario
//Input de la funcion
interface  LoginData{
  email:string;
  password:string;
}
// Decorador del servicoo que esta disponible en toda la aplicacion
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl='';//Como es una clase se puede insertar atributos
 
 constructor(private http: HttpClient) {}//Se inyecta el http al cliente

  login(data: LoginData): Observable<any> { //Metodo envia post al servidor
    return this.http.post<any>(this.apiUrl, data);
  }

  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');//Encapsualr el almacenamiento
  }

  logout(): void {
    localStorage.removeItem('auth_token');//Metodo para guardar localstorage
  }

  isAuthenticated(): boolean { //Metodo para confirmar si hay un token guardado
    return !!this.getToken();
  }
}
