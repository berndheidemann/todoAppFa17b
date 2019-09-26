import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {
  messageBoxVisible: boolean;
  messageBoxMessage: string;

  constructor() {
    this.messageBoxVisible = false;

  }

  showMessageBox(message: string): void {
    this.messageBoxVisible = true;
    this.messageBoxMessage = message;
    setTimeout(() => {
      this.messageBoxMessage = '';
      this.messageBoxVisible = false;
    }, 4000);
  }
}
