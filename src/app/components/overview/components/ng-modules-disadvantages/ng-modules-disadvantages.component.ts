import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-ng-modules-disadvantages',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './ng-modules-disadvantages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgModulesDisadvantagesComponent {
  title: string;
  paragraphs: string[];

  constructor() {
    this.title = 'What are the main disadvantages of NgModules?';
    this.paragraphs = [
      "When a module exports a declared component, directive, or pipe without additional functionality, it becomes a redundant class that doesn't provide significant value.",
      'Bundle size grows and grows, especially when you need to import the same redundant module everywhere.',
    ];
  }
}
