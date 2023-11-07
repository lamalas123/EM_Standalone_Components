import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from '../../shared/components/card/card.component';
import { ICardItem } from '../../shared/interfaces/card-item.interface';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterModule, CardComponent, NgFor],
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  cardItems: ICardItem[];

  constructor() {
    this.cardItems = [
      {
        title: 'NG MODULES DISADVANTAGES',
        paragraph: 'What are the problems of the NgModules?',
        routerLink: '/standalone/overview/ng-modules-disadvantages',
      },
      {
        title: ' WHAT IS STANDALONE APPROACH',
        paragraph: 'Learn about the Standalone Approach and its importance',
        routerLink: '/standalone/overview/approach',
      },
      {
        title: 'STANDALONE BENEFITS',
        paragraph:
          'Explore the Benefits of the Standalone Approach and its advantages',
        routerLink: '/standalone/overview/benefits',
      },

      {
        title: 'GENERATING STANDALONE COMPONENTS',
        paragraph: 'Explore how to generate Standalone components',
        routerLink: '/standalone/overview/generating-components',
      },
      {
        title: 'ANGULAR STANDALONE EXAMPLES',
        paragraph: ' Angular examples of standalone approach',
        routerLink: '/standalone/overview/examples',
      },
      {
        title: 'MIGRATE TO STANDALONE COMPONENTS',
        paragraph:
          ' Explore how to migrate your project components to standalone ',
        routerLink: '/standalone/overview/migration',
      },
      {
        title: 'STANDALONE PERFORMANCE',
        paragraph:
          'Performance Overview of standalone application vs without standalone',
        routerLink: '/standalone/overview/performance',
      },
    ];
  }
}
