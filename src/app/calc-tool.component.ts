import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-calc-tool',
  imports: [ReactiveFormsModule],
  template: `
    <h2>Calc Tool</h2>
    <div>
      <div>Result: {{ result() }}</div>
      <div>Input: <input type="number" [formControl]="inputControl" /></div>
      <div>
        <button (click)="add()">+</button>
        <button (click)="subtract()">-</button>
        <button (click)="multiply()">*</button>
        <button (click)="divide()">/</button>
      </div>
      <h3>History</h3>
      <ul>
        @if (history().length === 0) {
          <li>No History</li>
        } @else {
          @for (entry of history(); track $index) {
            <li>{{ entry }}</li>
          }
        }
      </ul>
      <button (click)="clearHistory()">Clear History</button>
    </div>
  `,
})
export class CalcToolComponent {
  result = signal(0);
  inputControl = new FormControl(0);
  history = signal<string[]>([]);

  getInput(): number {
    return Number(this.inputControl.value);
  }

  add() {
    this.result.set(this.result() + this.getInput());
    this.history.update((h) => [...h, `Add ${this.getInput()}`]);
  }

  subtract() {
    this.result.set(this.result() - this.getInput());
    this.history.update((h) => [...h, `Subtract ${this.getInput()}`]);
  }

  multiply() {
    this.result.set(this.result() * this.getInput());
    this.history.update((h) => [...h, `Multiply ${this.getInput()}`]);
  }

  divide() {
    const input = this.getInput();
    if (input === 0) {
      alert('Cannot divide by zero!');
      return;
    }
    this.result.set(this.result() / input);
    this.history.update((h) => [...h, `Divide ${this.getInput()}`]);
  }

  clearHistory() {
    this.history.set([]);
  }
}