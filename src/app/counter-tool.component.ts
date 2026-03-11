import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-counter-tool',
  imports: [ReactiveFormsModule],
  template: `
    <h2>Counter Tool</h2>
    <p>Current Count: {{ counter() }}</p>
    <fieldset>
      <legend>Counter Controls</legend>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
    </fieldset>
    <fieldset>
      <legend>Increment/Decrement Size</legend>
      <label for="step">Step Size:</label>
      <input type="number" id="step" [formControl]="stepControl" />
    </fieldset>
  `,
})
export class CounterToolComponent {
  counter = signal(0);
  stepControl = new FormControl(1);

  increment() {
    this.counter.update((value) => value + this.stepControl.value!);
  }

  decrement() {
    this.counter.update((value) => value - this.stepControl.value!);
  }

  reset() {
    this.counter.set(0);
  }
}