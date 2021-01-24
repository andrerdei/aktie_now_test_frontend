import { Component, OnInit } from '@angular/core';
import { BookModel } from './models/book.model';
import { CollectionModel } from './models/collection.model';
import { CollectionService } from './services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collection: CollectionModel = new CollectionModel();
  book: BookModel = new BookModel();
  totalRecords: number;
  currentPage = 1;

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.listCollection();
  }

  private listCollection() {
    this.collectionService.listCollection().subscribe(
      (fetchedCollection) => {
        this.collection.list = fetchedCollection.collectionList;
        this.totalRecords = fetchedCollection.collectionList.length;

      }, (err) => {
        console.log(err);
        alert('Listing error!');
      }
    );
  }

  public registerBook() {
    this.collectionService.registerBook(this.book).subscribe(
      () => {
        this.book = new BookModel();
        this.listCollection();

      }, (err) => {
        console.log(err);
        alert('Failed to register!');
      }
    )
  }

  public editBook(bookId: string) {
    this.collectionService.editBook(bookId, this.book).subscribe(
      () => {
        this.book = new BookModel();
        this.listCollection();

      }, (err) => {
        console.log(err);
        alert('Failed to edit!');
      }
    )
  }

  public deleteBook(bookId: string) {
    this.collectionService.deleteBook(bookId).subscribe(
      () => {
        this.listCollection();

      }, (err) => {
        console.log(err)
        alert('Failed to delete!');
      }
    )
  }
}
