import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CargarScriptsService } from '../../services/cargar-scripts.service';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterLink],
  providers: [CargarScriptsService],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css',
})
export class ListarProductosComponent {
  constructor(private _cargaScripts: CargarScriptsService) {
    _cargaScripts.carga(['js/dinamic']);
  }
}
