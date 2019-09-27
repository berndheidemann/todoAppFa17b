import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {MessageBoxService} from '../../services/message-box.service';
import {MessageBoxType} from '../../models/MessageBoxTypes';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor(private messageBoxservice: MessageBoxService) {
  }

  get visible(): boolean {
    return this.messageBoxservice.visible;
  }

  get text(): string {
    return this.messageBoxservice.message;
  }

  get type(): string {
    return this.messageBoxservice.type;
  }

  ngOnInit() {
  }

}
