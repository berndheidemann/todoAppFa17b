import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {DataService} from '../../services/data.service';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filter: Observable<any>;

  constructor(private dataService: DataService) {
    this.filter = this.dataService.todos.pipe(
      map(todo => todo.filter(t => {
        return t.label === 'Foo';
      })));

  }

  ngOnInit() {
  }

  get todos(): Observable<Todo[]> {
    return this.filter;
  }

  toggle(t: Todo) {
    this.dataService.toggle(t);
  }

  delete(t: Todo) {
    this.dataService.delete(t);
  }
}
