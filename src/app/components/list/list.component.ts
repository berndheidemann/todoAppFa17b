import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }

  get todos(): Todo[] {
    return this.dataService.todos;
  }

  toggle(t: Todo) {
    t.done = !t.done;
  }

  delete(t: Todo) {
    this.dataService.delete(t);
  }
}
