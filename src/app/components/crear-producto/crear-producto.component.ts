import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css',
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.productoForm = this.fb.group({
      tipo: ['', Validators.required],
      talle: ['', Validators.required],
      color: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  agregarProducto() {
    console.log(this.productoForm);
    const PRODUCTO: Producto = {
      tipo: this.productoForm.get('tipo')?.value,
      talle: this.productoForm.get('talle')?.value,
      color: this.productoForm.get('color')?.value,
      precio: this.productoForm.get('precio')?.value,
    };
    this.router.navigate(['/']);
  }
}
