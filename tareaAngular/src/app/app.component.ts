import { Component } from '@angular/core';
import { NombreyCostos } from './nyc-type';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tareaAngular';

  nombresYCostos: NombreyCostos[] = [
    {nombre: "Café", costo: 2.5},
    {nombre: "Transporte público", costo: 1.5},
    {nombre: "Pan", costo: 1.0},
    {nombre: "Periódico", costo: 0.5},
    {nombre: "Agua embotellada", costo: 1.2},
    {nombre: "Bolígrafo", costo: 0.8},
    {nombre: "Almuerzo", costo: 7.0},
    {nombre: "Cine", costo: 10.0},
    {nombre: "Gimnasio", costo: 20.0},
    {nombre: "Estacionamiento", costo: 3.5},
    {nombre: "Teléfono celular", costo: 50.0},
    {nombre: "Internet", costo: 30.0},
    {nombre: "Electricidad", costo: 40.0},
    {nombre: "Gasolina", costo: 45.0},
    {nombre: "Ropa", costo: 25.0},
    {nombre: "Zapatos", costo: 60.0},
    {nombre: "Higiene personal", costo: 15.0},
    {nombre: "Supermercado", costo: 100.0},
    {nombre: "Restaurantes", costo: 50.0},
    {nombre: "Cuidado del automóvil", costo: 20.0},
    {nombre: "Medicamentos", costo: 15.0},
    {nombre: "Seguro de salud", costo: 150.0},
    {nombre: "Seguro de automóvil", costo: 80.0},
    {nombre: "Netflix", costo: 12.0},
    {nombre: "Spotify", costo: 9.0},
    {nombre: "Cenas", costo: 40.0},
    {nombre: "Cabello", costo: 30.0},
    {nombre: "Viajes", costo: 200.0},
    {nombre: "Mascotas", costo: 50.0},
    {nombre: "Regalos", costo: 20.0}
  ];
  

  mostrarLista: boolean = true;
  mostrarLista2: boolean = true;
  mostrarTabla: boolean = true;
  
toggleMostrarLista(): void {
  this.mostrarLista = !this.mostrarLista;
}

toggleMostrarTabla(): void {
  this.mostrarTabla = !this.mostrarTabla;
}

}
