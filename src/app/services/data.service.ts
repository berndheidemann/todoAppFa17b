import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';
import {Category} from '../models/Category';
import {MessageBoxService} from './message-box.service';
import {MessageBoxType} from '../models/MessageBoxTypes';
import {Importance} from '../models/Importance';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // sa
  todos: Observable<Todo[]>;
  categories: Observable<Category[]>;

  constructor(private db: AngularFirestore,
              private messageBoxservice: MessageBoxService,
              private afAuth: AngularFireAuth) {
    this.todos = db.collection<Todo>('/todos').valueChanges({idField: 'id'});
    this.categories = db.collection<Category>('/categories').valueChanges();
    this.afAuth
      .auth
      .signInWithEmailAndPassword('a@b.de', '123456')
      .then(r => console.log('logged in'))
      .catch(e => {
        console.log(e.code);
      });
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
    console.log(JSON.stringify(t));
    t.done = !t.done;
    this.db.collection('todos').doc(t.id).set(t).then(() => {
    }).catch((e) => {
      t.done = !t.done;
      this.messageBoxservice.showMessageBox('Fehler beim ändern', MessageBoxType.DANGER);
      console.log(e);
    });
  }
}
