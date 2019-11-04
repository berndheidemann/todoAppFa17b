import {Category} from './Category';
import {Importance} from './Importance';

export class Todo {

  done: boolean;

  constructor(public id?: number, public label?: string, public category?: Category, public importance?: Importance) {
    this.done = false;
  }


}
