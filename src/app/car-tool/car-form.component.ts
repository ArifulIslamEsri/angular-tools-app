import { Component, output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Car } from '../../models/car.model';

@Component({
  standalone: true,
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="carForm" (ngSubmit)="handleSubmit()">
      <div>
        <label>Make:</label>
        <input type="text" formControlName="make" />
      </div>
      <div>
        <label>Model:</label>
        <input type="text" formControlName="model" />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" formControlName="year" />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" formControlName="color" />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" formControlName="price" />
      </div>
      <button type="submit">Add Car</button>
    </form>
  `,
})
export class CarFormComponent {
  onAddCar = output<Car>();

  carForm = new FormGroup({
    make: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(0),
    color: new FormControl(''),
    price: new FormControl(0),
  });

  handleSubmit() {
    const newCar: Car = {
      id: Date.now().toString(),
      make: this.carForm.value.make ?? '',
      model: this.carForm.value.model ?? '',
      year: Number(this.carForm.value.year),
      color: this.carForm.value.color ?? '',
      price: Number(this.carForm.value.price),
    };
    this.onAddCar.emit(newCar);
    this.carForm.reset();
  }
}