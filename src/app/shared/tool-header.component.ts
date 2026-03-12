import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tool-header',
  template: `
    <header>
      <ng-content select="[header]" />
      <ng-content select="[slogan]" />
    </header>
  `,
})
export class ToolHeaderComponent {}