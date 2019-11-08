import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';
import {Category} from '../models/Category';
import {MessageBoxService} from './message-box.service';
import {MessageBoxType} from '../models/MessageBoxTypes';
import {Importance} from '../models/Importance';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  todos: Observable<Todo[]>;
  categories: Observable<Category[]>;

  constructor(private db: AngularFirestore, private messageBoxservice: MessageBoxService) {
    this.todos = db.collection<Todo>('/todos').snapshotChanges().pipe(
      map(data => {
        return data.map(item => {
          const todo = item.payload.doc.data() as Todo;
          const id = item.payload.doc.id;
          return {id, ...todo};
        });
      })
    );
    this.categories = db.collection<Category>('/categories').valueChanges();
  }

  async save(todo: Todo) {
    try {
      await this.db.collection('/todos').add({
        label: todo.label,
        category: todo.category,
        done: todo.done,
        importance: todo.importance
      });
      this.messageBoxservice.showMessageBox('Todo erfolgreich gespeichert', MessageBoxType.SUCCESS);
    } catch (e) {
      this.messageBoxservice.showMessageBox('Fehler beim speichern', MessageBoxType.DANGER);
      console.log(e);
    }
  }

  delete(t: Todo) {
    this.db.collection('todos').doc(t.id).delete()
      .then(() => {
        this.messageBoxservice.showMessageBox('Todo erfolgreich gelöcht', MessageBoxType.SUCCESS);
      }).catch((e) => {
      this.messageBoxservice.showMessageBox('Fehler beim löschen', MessageBoxType.DANGER);
      console.log(e);
    });
  }

  toggle(t: Todo) {
    t.done = !t.done;
    this.db.collection('todos').doc(t.id).set(t).then(() => {
    }).catch((e) => {
      t.done = !t.done;
      this.messageBoxservice.showMessageBox('Fehler beim ändern', MessageBoxType.DANGER);
      console.log(e);
    });
  }
}
