import { Component, signal } from '@angular/core';
import { ToolHeaderComponent } from '../shared/tool-header.component';
import { CarTableComponent } from './car-table.component';
import { CarFormComponent } from './car-form.component';
import { Car } from '../../models/car.model';

@Component({
  standalone: true,
  selector: 'app-car-home',
  imports: [ToolHeaderComponent, CarTableComponent, CarFormComponent],
  template: `
    <app-tool-header>
      <h2 header>Car Tool</h2>
      <p slogan>Find your next car</p>
    </app-tool-header>
    <app-car-table
      [cars]="cars()"
      (onDelete)="deleteCar($event)"
    />
    <app-car-form (onAddCar)="addCar($event)" />
  `,
})
export class CarHomeComponent {
  cars = signal<Car[]>([
    { id: '1', make: 'Toyota', model: 'Camry', year: 2022, color: 'Silver', price: 26000 },
    { id: '2', make: 'Honda', model: 'Civic', year: 2021, color: 'Blue', price: 22000 },
    { id: '3', make: 'Ford', model: 'Mustang', year: 2023, color: 'Red', price: 35000 },
  ]);

  deleteCar(id: string) {
    this.cars.update((list) => list.filter((c) => c.id !== id));
  }

  addCar(car: Car) {
    this.cars.update((list) => [...list, car]);
  }
}