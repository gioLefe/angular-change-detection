import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appVfx]',
})
export class VfxDirective {
  elem = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);
  appVfx = input();
  appVfxColor = input<string>('red')
  appVfxDuration = input<number>(500)

  constructor() {
    effect(() => {
      this.appVfx()
      this.elem.nativeElement.animate([
        { offset: 0, backgroundColor: this.appVfxColor() },
        { offset: 1, backgroundColor: 'transparent' },
      ], { id: 'vfx', iterations: 1, duration: this.appVfxDuration() })
    })
  }
}
