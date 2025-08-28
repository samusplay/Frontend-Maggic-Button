import { Component, NgModule } from '@angular/core';
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
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
