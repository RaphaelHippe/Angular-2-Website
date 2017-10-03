import { Routes }  from '@angular/router';

import { HomeComponent } from './components/routing_components/home/home.component';
import { ReferenceComponent } from './components/routing_components/reference/reference.component';
import {ImpressumComponent} from "./components/routing_components/impressum/impressum.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reference',
    component: ReferenceComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  }
];
