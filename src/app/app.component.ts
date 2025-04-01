import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { ContainerComponent } from "./components/container/container.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { AppStateService } from './services/app-state';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [ContainerComponent, MessagesComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  , changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  appState = inject(AppStateService)
  title = 'change-detection';
}
