import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClickDirective } from '../../directives/click-directive';
import { FontSizeDirective } from '../../directives/font-size.directive';
import { ITailwindClass } from '../../interfaces/tailwind-obj.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  hostDirectives: [
    {
      directive: FontSizeDirective,
      inputs: ['fontSize'],
    },
    {
      directive: ClickDirective,
      outputs: ['clicked'],
    },
  ],
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['/card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() isCardMultiple: boolean;
  @Input() title: string;
  @Input() paragraphs: string[];
  @Input() paragraph: string;
  @Input() routerLink?: string;
  @Input() tailwindClass?: ITailwindClass;

  constructor() {
    this.title = '';
    this.paragraph = '';
    this.routerLink = '';
    this.paragraphs = [];
    this.isCardMultiple = false;
    this.tailwindClass = {
      height: '',
    };
  }
}
