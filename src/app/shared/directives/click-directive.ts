import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true,
})
export class ClickDirective {
  @Output() clicked = new EventEmitter<void>();

  @HostListener('click')
  handleClick() {
    this.clicked.emit();
  }
}
