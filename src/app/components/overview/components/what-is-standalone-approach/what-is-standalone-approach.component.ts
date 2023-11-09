import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { IMultipleCardItem } from '../../../../shared/interfaces/multiple-card-item.interface';
import { ITailwindClass } from '../../../../shared/interfaces/tailwind-obj.interface';

@Component({
  selector: 'app-what-is-standalone-approach',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './what-is-standalone-approach.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatIsStandaloneApproachComponent {
  cardItems: IMultipleCardItem[];
  tailwindClass: ITailwindClass;

  constructor() {
    this.tailwindClass = {
      height: 't-h-[85vh]',
    };

    this.cardItems = [
      {
        title: 'What is the meaning of standalone components?',
        paragraphs: [
          'Self-contained and reusable units of code that encapsulates logic, data, and UI elements which allows us to build Angular applications without using modules.',
          "Not dependent on Angular's NgModule system for their configuration and dependencies.",
          'These components can also operate independently, free from the need to be nested within other components.',
        ],
      },
      {
        title: 'What is the idea of this approach in Angular?',
        paragraphs: [
          'Rather than importing an entire module with potentially unused components and services, standalone approach allows us to create individual components that encapsulate their own functionality and dependencies.',
          'Approach in which we are able to use components, directives, pipes without using and updating NgModules.',
        ],
      },
      {
        title: 'For what can we use standalone approach?',
        paragraphs: [
          'For building Angular applications with self contained components that are easier to understand, test, and maintain.',
          'For promoting better organization of code with less files and code to maintain.',
          'For improving application with enhanced efficiency and reduced bundle size.',
          'Also they open a way to new interesting patterns such as Host Directives.',
        ],
      },
    ];
  }
}
