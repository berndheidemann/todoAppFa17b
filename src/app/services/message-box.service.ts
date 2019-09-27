import {Injectable} from '@angular/core';
import {MessageBoxType} from '../models/MessageBoxTypes';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {
  visible: boolean;
  message: string;
  type: MessageBoxType;


  constructor() {
    this.visible = false;

  }

  showMessageBox(message: string, type: MessageBoxType): void {
    this.visible = true;
    this.message = message;
    this.type = type;
    setTimeout(() => {
      this.message = '';
      this.visible = false;
      this.type = null;
    }, 4000);
  }
}
