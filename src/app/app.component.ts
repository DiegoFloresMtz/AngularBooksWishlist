import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appname = 'app works!';

  filter: 'all' | 'active' | 'done' = 'all';
  
  allBooks = [
    { title: 'Libro 1', done: false },
    { title: 'Libro 2', done: false },
    { title: 'Libro 3', done: false },
    { title: 'Libro 4', done: false },
    { title: 'Libro 5', done: false },
    { title: 'Libro 6', done: false },
  ];

  get books() {
    if (this.filter === 'all') {
      return ;
    }
    return this.allBooks.filter(book => this.filter === 'done' ? book.done : !book.done);
  }

  addBook(title) {
    this.allBooks.unshift({
      title,
      done: false
    });
  }

  remove(book) {
    this.allBooks.splice(this.allBooks.indexOf(book), 1);
  }

}
