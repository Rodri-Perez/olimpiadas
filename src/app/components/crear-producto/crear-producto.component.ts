import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css',
})
export class CrearProductoComponent {}
