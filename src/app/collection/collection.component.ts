import { Component, OnInit } from '@angular/core';
import { BookModel } from './models/book.model';
import { CollectionModel } from './models/collection.model';
import { CollectionService } from './services/collection.service';
import { CollectionModalService } from './services/collection-modal.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public collection: CollectionModel = new CollectionModel();
  public book: BookModel = new BookModel();
  public totalRecords: number;
  public currentPage = 1;
  public currentBookId: string;

  constructor(
    private collectionService: CollectionService,
    private collectionModalService: CollectionModalService
  ) { }

  ngOnInit(): void {
    this.listCollection();
  }

  private listCollection(): void {
    this.collectionService.listCollection().subscribe(
      (fetchedCollection) => {
        this.collection.list = fetchedCollection.collectionList;
        this.totalRecords = fetchedCollection.collectionList.length;

      }, (err) => {
        console.log(err);
        alert('Falha na listagem, tente novamente');
      }
    );
  }

  public registerBook(): void {
    this.collectionService.registerBook(this.book).subscribe(
      () => {
        this.book = new BookModel();
        this.listCollection();

      }, (err) => {
        console.log(err);
        alert('Falha ao registrar, tente novamente');
      }
    )
  }

  public editBook(bookId: string): void {
    this.collectionService.editBook(bookId, this.book).subscribe(
      () => {
        this.book = new BookModel();
        this.listCollection();

      }, (err) => {
        console.log(err);
        alert('Falha ao editar, tente novamente');
      }
    )
  }

  public deleteBook(bookId: string): void {
    this.collectionService.deleteBook(bookId).subscribe(
      () => {
        this.listCollection();

      }, (err) => {
        console.log(err)
        alert('Falha ao deletar, tente novamente');
      }
    )
  }

  public getCurrentBookId(bookId: string): void {
    this.currentBookId = bookId;
  }

  public toggleCreateModal(): void {
    this.collectionModalService.toggleCreateModal();
  }

  public toggleEditModal(): void {
    this.collectionModalService.toggleEditModal();
  }
}
