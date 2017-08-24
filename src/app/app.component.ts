import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  today = new Date();
  jour = 'lundi';

  isChecked = false;
  label = 'Valider les CGV';
  inputValue = ' ';

  listeToDo: string[] = [];

  name = 'Johan Doe';
  isMale = true;

  toDoTest = "Je valide les CGV";
  toDoChecked = true;

  createToDo() {
    if (this.inputValue) {
      this.listeToDo.push(this.inputValue);
      this.inputValue = '';
    }
    if (this.isChecked) {
      this.isChecked = true;
    }
  }
}
