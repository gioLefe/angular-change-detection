import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { AppStateService } from '../../services/app-state';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  appState = inject(AppStateService)
  childName = viewChild<ElementRef<HTMLInputElement>>('childNameText');
  isOnPush: boolean = true

  keyUp($event: KeyboardEvent) {
    if ($event.code === 'Enter') {
      this.addChild()
    }
  }

  addChild() {
    const val = this.childName()?.nativeElement.value
    const childName = this.childName()
    if (val === undefined || val === '' || childName === undefined) {
      return;
    }

    this.appState.addChild(val);
    childName.nativeElement.value = ''
  }
  changingCdr(val: Event) {
    this.isOnPush = !this.isOnPush
    this.appState.cdStrategy.set(this.isOnPush ? 'OnPush' : 'Default')
  }
}
