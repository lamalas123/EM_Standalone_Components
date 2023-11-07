import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true,
})
export class FontSizeDirective {
  @Input()
  @HostBinding('style.font-size.px')
  fontSize = 22;
}
