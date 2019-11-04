import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';
import {Category} from '../models/Category';
import {MessageBoxService} from './message-box.service';
import {MessageBoxType} from '../models/MessageBoxTypes';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [];
  categories: Category[] = [];


  constructor(private db: AngularFirestore, private messageBoxservice: MessageBoxService) {
    this.categories.push(new Category(1, 'Arbeit'));
    this.categories.push(new Category(2, 'Privat'));
    this.categories.push(new Category(3, 'Verein'));

    this.todos.push(new Todo(1, 'Foo', this.categories[0]));
    this.todos.push(new Todo(2, 'FooBar', this.categories[0]));
    this.todos.push(new Todo(3, 'Bar', this.categories[2]));


  }

  save(todo: Todo) {
    this.todos.push(todo);
    this.messageBoxservice.showMessageBox('Todo erfolgreich gespeichert', MessageBoxType.SUCCESS);
  }

  delete(t: Todo) {
    this.todos = this.todos.filter(todo => todo !== t);
    this.messageBoxservice.showMessageBox('erfolgreich gelöscht', MessageBoxType.DANGER);
  }


}
