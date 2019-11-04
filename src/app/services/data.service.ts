import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';
import {Category} from '../models/Category';
import {MessageBoxService} from './message-box.service';
import {MessageBoxType} from '../models/MessageBoxTypes';
import {Importance} from '../models/Importance';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [];
  categories: Category[] = [];


  constructor(private messageBoxservice: MessageBoxService) {
    this.categories.push(new Category(1, 'Arbeit'));
    this.categories.push(new Category(2, 'Privat'));
    this.categories.push(new Category(3, 'Verein'));

    this.todos.push(new Todo(1, 'Rasen mähen', this.categories[0], Importance.minor));
    this.todos.push(new Todo(2, 'Bier kaufen', this.categories[1], Importance.normal));
    this.todos.push(new Todo(3, 'Bier trinken', this.categories[2], Importance.critical));


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
