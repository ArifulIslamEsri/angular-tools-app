import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { Color } from '../models/color';
import { ToolHeaderComponent } from '../shared/tool-header.component';
import { ColorListComponent } from './color-list.component';

@Component({
  selector: 'app-color-home',
  imports: [ToolHeaderComponent, ColorListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-tool-header>
      <h2 header>Color Tool</h2>
    </app-tool-header>
    <app-color-list [colors]="colors()" (deleteColor)="doDeleteColor(+$event)" />
  `,
})
export class ColorHomeComponent {
  protected readonly colors = signal<Color[]>([
    { id: 1, name: 'red', hexcode: '#ff0000' },
    { id: 2, name: 'green', hexcode: '#00ff00' },
    { id: 3, name: 'blue', hexcode: '#0000ff' },
  ]);

  protected doDeleteColor(id: number): void {
    this.colors.update((colors) => colors.filter((c) => c.id !== id));
  }
}