import { Component, signal } from '@angular/core';
import { ToolHeaderComponent } from '../shared/tool-header.component';
import { ColorListComponent } from './color-list.component';

interface Color {
  id: number;
  name: string;
  hexcode: string;
}

@Component({
  standalone: true,
  selector: 'app-color-home',
  imports: [ToolHeaderComponent, ColorListComponent],
  template: `
    <app-tool-header headerText="Color Tool" />
    <app-color-list
      [colors]="colors()"
      (onDelete)="deleteColor($event)"
    />
  `,
})
export class ColorHomeComponent {
  colors = signal<Color[]>([
    { id: 1, name: 'red', hexcode: '#ff0000' },
    { id: 2, name: 'green', hexcode: '#00ff00' },
    { id: 3, name: 'blue', hexcode: '#0000ff' },
  ]);

  deleteColor(id: number) {
    this.colors.update((list) => list.filter((c) => c.id !== id));
  }
}