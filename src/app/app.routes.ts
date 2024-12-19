import { Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    component: MainWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'panier',
        pathMatch: 'full',
      },
      {
        path: 'panier',
        component: PanierComponent,
      },
      {
        path: 'liste-produits',
        component: ListeProduitsComponent,
      },
    ],
  },
];
