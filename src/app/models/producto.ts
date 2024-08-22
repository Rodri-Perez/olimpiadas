export class Producto {
  _id?: number;
  _id_rol?: number;
  tipo: string;
  talle: string;
  color: string;
  precio: number;

  constructor(
    tipo: string,
    talle: string,
    color: string,
    precio: number
  ) {
    this.tipo = tipo;
    this.talle = talle;
    this.color = color;
    this.precio = precio;
  }
}
