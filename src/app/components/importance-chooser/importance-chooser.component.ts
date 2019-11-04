import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Importance} from '../../models/Importance';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-importance-chooser',
  templateUrl: './importance-chooser.component.html',
  styleUrls: ['./importance-chooser.component.css']
})
export class ImportanceChooserComponent implements OnInit {

  importance = Importance;

  @Output() choosed = new EventEmitter<Importance>();
  @Input() todo: Todo;

  constructor() {
  }

  ngOnInit() {
  }

  select(importance: Importance) {
    this.choosed.emit(importance);
  }
}
