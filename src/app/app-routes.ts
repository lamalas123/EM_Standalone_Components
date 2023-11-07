import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'standalone',
    children: [
      {
        path: 'overview',
        loadChildren: () =>
          import('./components/overview/overview-routes').then(
            (c) => c.OVERVIEW_ROUTES
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'standalone/overview',
  },
];

//No more modules included as it was with not standalone components
/* @NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
}) */
export class AppRoutes {}
