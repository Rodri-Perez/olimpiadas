import { Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
