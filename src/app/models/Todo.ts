import {Category} from './Category';
import {Importance} from './Importance';

export class Todo {

  done: boolean;

  constructor(public id?: string, public label?: string, public category?: Category, public importance?: Importance) {
    this.done = false;
  }


}
