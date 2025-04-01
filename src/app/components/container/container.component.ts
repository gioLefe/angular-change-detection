import { CommonModule } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-container',
  imports: [ChildComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  // Change to OnPush to see how not children are checked by the change detection when typing in the textbox
  changeDetection: ChangeDetectionStrategy.Default
})
export class ContainerComponent implements AfterViewChecked {
  triggerTimeout() {
    setTimeout(() => {
      this.appState.addMessage('timeout happened from AppContainer!')
    }, 1000)
  }
  appState = inject(AppStateService);

  ngAfterViewChecked(): void {
    this.appState.addMessage('Change detection - Container');
  }

  clearChildren() {
    this.appState.clearChildren()
  }
}
