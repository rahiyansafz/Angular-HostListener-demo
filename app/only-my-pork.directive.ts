import { Directive, HostListener } from '@angular/core';

@Directive({selector: '[onlyMyBacon]'})
export class OnlyMyBacon {

  @HostListener('mouseenter') onMouseEnter() {
    alert("Don't touch my bacon!");
  }
}