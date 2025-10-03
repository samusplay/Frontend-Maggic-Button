import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

//rutas visuaales que se ven desde el dashboard rutas hijas
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../pages/dashboard/dashboard.component').then(
            m => m.DashboardComponent
          )
      },
      { path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },

     {
      path: 'estudiantes',
    loadComponent: () =>
    import('../pages/estudiantes/estudiantes.component').then(
      m => m.EstudiantesComponent
    )
      },

      {
      path: 'asistencias',
    loadComponent: () =>
    import('../pages/asistencias/asistencias.component').then(
      m => m.AsistenciasComponent
    )
      },

       {
      path: 'calificaciones',
    loadComponent: () =>
    import('../pages/calificaciones/calificaciones.component').then(
      m => m.CalificacionesComponent
    )
      },

      {
      path: 'cursos',
    loadComponent: () =>
    import('../pages/cursos/cursos.component').then(
      m => m.CursosComponent
    )
      },

      {
      path: 'entregas',
    loadComponent: () =>
    import('../pages/entregas/entregas.component').then(
      m => m.EntregasComponent
    )
      },

       {
      path: 'eventos',
    loadComponent: () =>
    import('../pages/eventos/eventos.component').then(
      m => m.EventosComponent
    )
      },

         {
      path: 'evidencias',
    loadComponent: () =>
    import('../pages/evidencias/evidencias.component').then(
      m => m.EvidenciasComponent
    )
      },

         {
      path: 'matriculas',
    loadComponent: () =>
    import('../pages/matriculas/matriculas.component').then(
      m => m.MatriculasComponent
    )
      },

        {
      path: 'tareas',
    loadComponent: () =>
    import('../pages/tareas/tareas.component').then(
      m => m.TareasComponent
    )
      },
      
       { path: '**', redirectTo: 'dashboard' }

      


    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
