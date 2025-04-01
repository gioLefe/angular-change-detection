import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppStateService {
    cdStrategy = signal<'OnPush' | 'Default'>('Default');
    messages = signal<string[]>([])
    children = signal<string[]>([])

    addMessage(value: string) {
        this.messages.set(this.messages().concat(value))
    }
    addChild(value: string) {
        this.children.set(this.children().concat(value))
    }
    clearChildren() {
        this.children.set([]);
    }
    clearMessages() {
        this.messages.set([])
    }
}