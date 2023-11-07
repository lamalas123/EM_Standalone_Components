import { AppRoutes } from 'src/app/app-routes';

import { BenefitComponent } from './standalone-benefits.component';

export const STANDALONE_BENEFIT_ROUTES: AppRoutes[] = [
  {
    path: '',
    component: BenefitComponent,
  },
];
