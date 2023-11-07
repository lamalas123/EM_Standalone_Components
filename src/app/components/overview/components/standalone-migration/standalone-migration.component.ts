import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { IGenerateMigrateComponent } from '../../../interfaces/generate-component.interface';

@Component({
  selector: 'app-standalone-migration',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './standalone-migration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandaloneMigrationComponent {
  migrateComponentObjects: IGenerateMigrateComponent[];
  title: string;
  paragraphs: string[];

  constructor() {
    this.migrateComponentObjects = [
      {
        stepTitle:
          'Migrate components of your angular project to standalone components if version of Angular is 15 or higher',
        imgUrl: 'assets/img/migrate-component/migrate-options.png',
      },
    ];

    this.title = 'Optional follow-up steps you may want to take';
    this.paragraphs = [
      'Find and remove any remaining NgModule declarations',
      'Remove the remaining declarations manually.',
      'Run any code formatters, if the project uses automatic formatting.',
      'Run any linters in your project and fix new warnings. Some linters support a --fix flag that may resolve some of your warnings automatically.',
    ];
  }
}
