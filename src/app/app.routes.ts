import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CounterToolComponent } from './counter-tool.component';
import { CalcToolComponent } from './calc-tool.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'counter-tool', component: CounterToolComponent },
  { path: 'calc-tool', component: CalcToolComponent }
];