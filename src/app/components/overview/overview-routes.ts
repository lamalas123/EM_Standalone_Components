import { AppRoutes } from 'src/app/app-routes';

import { HomeComponent } from './overview.component';

export const OVERVIEW_ROUTES: AppRoutes[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'approach',
    loadChildren: () =>
      import(
        './components/what-is-standalone-approach/what-is-standalone-approach-routes'
      ).then((m) => m.WHAT_IS_STANDALONE_APPROACH_ROUTES),
  },
  {
    path: 'benefits',
    loadChildren: () =>
      import(
        './components/standalone-benefits/standalone-benefits-routes'
      ).then((m) => m.STANDALONE_BENEFIT_ROUTES),
  },
  {
    path: 'performance',
    loadChildren: () =>
      import(
        './components/standalone-performance/standalone-performance-routes'
      ).then((m) => m.STANDALONE_PERFORMANCE_ROUTES),
  },
  {
    path: 'generating-components',
    loadChildren: () =>
      import(
        './components/generating-standalone-components/generating-standalone-components-routes'
      ).then((m) => m.GENERATING_STANDALONE_COMPONENT_ROUTES),
  },
  {
    path: 'ng-modules-disadvantages',
    loadChildren: () =>
      import(
        './components/ng-modules-disadvantages/ng-modules-disadvantages-routes'
      ).then((m) => m.NG_MODULES_DISADVANTAGES_ROUTES),
  },
  {
    path: 'examples',
    loadChildren: () =>
      import(
        './components/standalone-examples/standalone-examples-routes'
      ).then((m) => m.STANDALONE_EXAMPLES),
  },
  {
    path: 'migration',
    loadChildren: () =>
      import(
        './components/standalone-migration/standalone-migration-routes'
      ).then((m) => m.STANDALONE_MIGRATION_ROUTES),
  },
];
