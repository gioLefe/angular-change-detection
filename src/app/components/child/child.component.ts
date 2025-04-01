import { ChangeDetectionStrategy, Component, DoCheck, inject, input, signal } from '@angular/core';
import { AppStateService } from '../../services/app-state';
import { VfxDirective } from '../../directives/vfx/vfx.directive';

@Component({
  selector: 'app-child',
  imports: [VfxDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements DoCheck {
  appState = inject(AppStateService);
  name = input('');
  vfxTrigger = signal<number>(0)

  log(value: string) {
    this.appState.addMessage(value)
    console.log(value);
  }

  ngDoCheck(): void {
    this.log('Change detection - Child: ' + this.name())
    this.vfxTrigger.set(Math.random())
  }
}
