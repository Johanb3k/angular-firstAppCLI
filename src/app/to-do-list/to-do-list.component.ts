import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ToDoModel } from './list-element/to-do-model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToDoListComponent implements OnInit {

  newToDoText: string;
  toDoList: ToDoModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  addElt() {
    if(this.newToDoText !== '') {
      this.toDoList.push({
        text: this.newToDoText,
        isChecked: false
      });
      this.newToDoText = '';
    }
  }

  removeElt(todo: ToDoModel) {
    let index = this.toDoList.findIndex(t => { return t == todo});

    if ( index != -1 ) {
      this.toDoList.splice(index,1);
    }
    else { 
      alert('Il n\'y a pas d\'élément à supprimer');
    }
  }


}
