import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from "../book";
@Component({
  selector: 'book-app',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {

  editable = false;

  @Input() book: Book;
  @Input() newBook: string;
  @Output() remove = new EventEmitter<Book>();

  saveBook(title) {
    if (!title) return;
    this.editable = false;
    this.book.title = title;
  }

}
