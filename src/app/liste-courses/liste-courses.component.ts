import { Component, OnInit } from '@angular/core';
import { ArrayModel } from './array-model';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.css']
})
export class ListeCoursesComponent implements OnInit {
  inputArticles: string;
  listeArticles: ArrayModel[] = [];
  nbArticles = 0;
  nbArticlesChecked = 0;

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    console.log("On add un produit");
    if ( this.inputArticles ) {
      console.log(this.inputArticles);
      this.listeArticles.push({
        text : this.inputArticles,
        isChecked : false
      });
    }
    this.inputArticles = ' ';
  }

  deleteArticle(elt) {
    const index = this.listeArticles.findIndex(t => { return t === elt });
    this.listeArticles.splice(index, 1);

    this.countArticles();
  }

  articleSelected(elt){
    console.log(elt);
    const index = this.listeArticles.findIndex(t => { return t === elt });
    console.log("Index :"+index);
    const etatCheckbox = this.listeArticles[index]['isChecked'];

    if (!etatCheckbox) { this.listeArticles[index]['isChecked'] = true; }
    else { this.listeArticles[index]['isChecked'] = false; }

    this.countArticles();
  }

  countArticles(){
    const nbArticles = this.listeArticles.length;
    this.nbArticlesChecked = 0;
    for ( let i = 0; i < nbArticles; i++ ) {
      const isCheckedArticle = this.listeArticles[i].isChecked;
      if ( isCheckedArticle === true ) { this.nbArticlesChecked++; }
    }
  }

  totalProduits() {
    for (let i = 0; i < this.listeArticles.length; i++) {
      if (this.listeArticles[i].isChecked === true) { this.nbArticles++; }
    }
  }

}
