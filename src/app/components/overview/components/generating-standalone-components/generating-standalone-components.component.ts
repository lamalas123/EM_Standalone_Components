import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IGenerateMigrateComponent } from '../../../interfaces/generate-component.interface';

@Component({
  selector: 'app-generating-standalone-components',
  standalone: true,
  imports: [NgFor],
  templateUrl: './generating-standalone-components.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratingStandaloneComponentsComponent {
  generateComponentObjects: IGenerateMigrateComponent[];

  constructor() {
    this.generateComponentObjects = [
      {
        stepTitle: '1. Generate new standalone component',
        imgUrl: 'assets/img/generate-component/generate-command.png',
      },
      {
        stepTitle: '2. Create routing file',
        imgUrl: 'assets/img/generate-component/file-overview.png',
      },
      {
        stepTitle: '3. Inside of routing file define routes',
        imgUrl: 'assets/img/generate-component/define-routes.png',
      },
      {
        stepTitle: '4. Import routes where you want to import it',
        imgUrl: 'assets/img/generate-component/routes-file.png',
      },
      {
        stepTitle:
          '5. After imported routes do your coding inside component if needed',
        imgUrl: 'assets/img/generate-component/file-ts.png',
      },
      {
        stepTitle: '6. Do your coding inside of html or css file if needed',
        imgUrl: 'assets/img/generate-component/file-html.png',
      },
    ];
  }
}
