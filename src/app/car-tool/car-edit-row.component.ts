import { Component, input, output, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Car } from '../../models/car.model';

@Component({
  standalone: true,
  selector: '[app-car-edit-row]',
  imports: [ReactiveFormsModule],
  template: `
    <td>
      <input type="text" formControlName="make" [formControl]="carForm.controls.make" />
    </td>
    <td>
      <input type="text" formControlName="model" [formControl]="carForm.controls.model" />
    </td>
    <td>
      <input type="number" formControlName="year" [formControl]="carForm.controls.year" />
    </td>
    <td>
      <input type="text" formControlName="color" [formControl]="carForm.controls.color" />
    </td>
    <td>
      <input type="number" formControlName="price" [formControl]="carForm.controls.price" />
    </td>
    <td>
      <button type="button">Save</button>
      <button type="button">Cancel</button>
    </td>
  `,
})
export class CarEditRowComponent implements OnInit {
  car = input.required<Car>();
  onSave = output<Car>();
  onCancel = output<void>();

  carForm = new FormGroup({
    make: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(0),
    color: new FormControl(''),
    price: new FormControl(0),
  });

  ngOnInit() {
    this.carForm.setValue({
      make: this.car().make,
      model: this.car().model,
      year: this.car().year,
      color: this.car().color,
      price: this.car().price,
    });
  }
}