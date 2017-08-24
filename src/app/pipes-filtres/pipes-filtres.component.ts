import { Component, ViewEncapsulation } from '@angular/core';

export class Personne {
  name: string;
  isMale: boolean;
}

@Component({
  selector: 'app-pipes-filtres',
  templateUrl: './pipes-filtres.component.html',
  styleUrls: ['./pipes-filtres.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PipesFiltresComponent {

  personnes: Personne[] = [
    { name: 'Johan', isMale: true },
    { name: 'Charlotte', isMale: false },
    { name: 'Maxime', isMale: true},
  ]

}
