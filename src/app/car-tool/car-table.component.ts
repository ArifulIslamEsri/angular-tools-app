import { Component, input, output } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarViewRowComponent } from './car-view-row.component';
import { CarEditRowComponent } from './car-edit-row.component';

@Component({
  standalone: true,
  selector: 'app-car-table',
  imports: [CarViewRowComponent, CarEditRowComponent],
  template: `
    <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        @for (car of cars(); track car.id) {
          @if (car.id === editingCarId()) {
            <tr app-car-edit-row
              [car]="car"
            ></tr>
          } @else {
            <tr app-car-view-row
              [car]="car"
              (onDelete)="onDelete.emit($event)"
              (onEdit)="onEdit.emit($event)"
            ></tr>
          }
        }
      </tbody>
    </table>
  `,
})
export class CarTableComponent {
  cars = input<Car[]>([]);
  editingCarId = input<string | null>(null);
  onDelete = output<string>();
  onEdit = output<string>();
}