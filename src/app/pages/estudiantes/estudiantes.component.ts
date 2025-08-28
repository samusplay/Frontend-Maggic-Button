import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


//Importaciones de Angular Material
@Component({
  selector: 'app-estudiantes',
  standalone:true,
  imports: [
   CommonModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
     MatIconModule
  ],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.scss'
})
export class EstudiantesComponent {
 columnas:string[]=['nombre','correo'];
 //Pruebas del componente
 estudiantes=[
  {nombre: 'Samuel Rodriguez',correo:'samusplay08@gmail.com'},
  {nombre:'Adel Rodriguez',correo:'Adel@gmail.com'}
 ]
}
