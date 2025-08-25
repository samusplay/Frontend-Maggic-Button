import { Routes } from '@angular/router';
//ruta Raiz de layout
export const routes: Routes = [
{
    path:'',
    loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)
    
},
{path:'***',redirectTo:''}
];
