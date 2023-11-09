import { isNil } from 'lodash';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { StyleDirective } from '../../../../shared/directives/style-directive';
import { UppercasePipe } from '../../../../shared/pipes/uppercase.pipe';
import { NAMES } from '../../../constants/names.constant';

@Component({
  selector: 'app-standalone-examples',
  standalone: true,
  hostDirectives: [StyleDirective],
  imports: [
    NgIf,
    NgFor,
    UppercasePipe,
    CardComponent,
    NzSelectModule,
    FormsModule,
  ],
  templateUrl: './standalone-examples.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandaloneExamplesComponent {
  areUpperCaseNamesShown: boolean;
  title: string;
  fontSize: number;

  clickedTimes: WritableSignal<number>;

  fontSizes: number[];
  names: string[];
  paragraphs: string[];

  constructor(private cdr: ChangeDetectorRef) {
    this.areUpperCaseNamesShown = true;
    this.names = ['Ernest', 'Petar', 'Mario', 'Tomislav', 'Marin'];
    this.title =
      'Example of standalone components combined with host directives';
    this.paragraphs = [
      'Changing font size of text inside of card by selecting font value and count times user clicked on card component',
    ];
    this.fontSize = 22;
    this.fontSizes = [12, 14, 16, 18, 20, 22];
    this.clickedTimes = signal(0);
  }

  toggleAreUpperCaseNamesShown(): void {
    this.areUpperCaseNamesShown = !this.areUpperCaseNamesShown;
  }

  removeRandomItem(): void {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    if (randomIndex >= 0 && randomIndex < this.names.length) {
      this.names.splice(randomIndex, 1);
      this.cdr.markForCheck();
    }
  }

  addItemsToList(): void {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    const randomName = NAMES[randomIndex];
    if (!isNil(randomName)) {
      this.names.push(randomName);
      this.names = this.names;
      this.cdr.markForCheck();
    }
  }

  handleClicked() {
    this.clickedTimes.update((clicked) => clicked + 1);
  }
}
