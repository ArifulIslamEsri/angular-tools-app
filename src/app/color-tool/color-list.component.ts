import { Component, input, output } from '@angular/core';

interface Color {
  id: number;
  name: string;
  hexcode: string;
}

@Component({
  standalone: true,
  selector: 'app-color-list',
  template: `
    <ul>
      @for (color of colors(); track color.id) {
        <li>
          {{ color.name }} - {{ color.hexcode }}
          <button (click)="onDelete.emit(color.id)">X</button>
        </li>
      }
    </ul>
  `,
})
export class ColorListComponent {
  colors = input<Color[]>([]);
  onDelete = output<number>();
}