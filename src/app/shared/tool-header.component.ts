import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tool-header',
  template: `
    <header>
      <h2>{{ headerText() }}</h2>
    </header>
  `,
})
export class ToolHeaderComponent {
  headerText = input<string>('');
}