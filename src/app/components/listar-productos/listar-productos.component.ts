import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css',
})
export class ListarProductosComponent {}
