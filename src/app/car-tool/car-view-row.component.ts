import { Component, input, output } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
  standalone: true,
  selector: '[app-car-view-row]',
  template: `
    <td>{{ car().make }}</td>
    <td>{{ car().model }}</td>
    <td>{{ car().year }}</td>
    <td>{{ car().color }}</td>
    <td>{{ car().price }}</td>
    <td>
      <button (click)="onDelete.emit(car().id)">X</button>
      <button (click)="onEdit.emit(car().id)">Edit</button>
    </td>
  `,
})
export class CarViewRowComponent {
  car = input.required<Car>();
  onDelete = output<string>();
  onEdit = output<string>();
}