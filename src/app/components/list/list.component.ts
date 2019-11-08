import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {DataService} from '../../services/data.service';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

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

  get todos(): Observable<Todo[]> {
    return this.dataService.todos;
  }

  toggle(t: Todo) {
    this.dataService.toggle(t);
  }

  delete(t: Todo) {
    this.dataService.delete(t);
  }
}
