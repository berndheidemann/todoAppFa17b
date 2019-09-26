import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {MessageBoxService} from '../../services/message-box.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {


  constructor(private messageBoxservice: MessageBoxService) {
  }

  get visible(): boolean {
    return this.messageBoxservice.messageBoxVisible;
  }

  get text(): string {
    return this.messageBoxservice.messageBoxMessage;
  }

  ngOnInit() {
  }

}
