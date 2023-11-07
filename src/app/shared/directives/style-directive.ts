import { Directive, Input } from '@angular/core';

import { ClickDirective } from './click-directive';
import { FontSizeDirective } from './font-size.directive';

@Directive({
  selector: '[appStyleDirective]',
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
})
export class StyleDirective {
  @Input() fontSize: number;

  constructor() {
    this.fontSize = 22;
  }
}
