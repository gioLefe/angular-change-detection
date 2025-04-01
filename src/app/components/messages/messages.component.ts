import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {
  appState = inject(AppStateService)

  log(value: string) {
    this.appState.addMessage(value)
  }

  clearMessages() {
    this.appState.clearMessages()
  }
}
