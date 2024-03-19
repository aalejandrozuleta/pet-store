import { Injectable } from '@angular/core';

// Definimos la interfaz para representar un producto
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  // Array para almacenar los productos del carrito
  private cart: Product[] = [];

  constructor() { }

  // Crear Método para añadir un producto al carrito
  

  // Crear Método para eliminar un producto del carrito por su ID

  // Crear Método para obtener todos los productos del carrito
  

  // Crear Método para calcular el precio total de los productos en el carrito


  // Crear Método para vaciar el carrito

}
