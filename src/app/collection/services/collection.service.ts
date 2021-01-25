import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private accessToken: string = localStorage.getItem('accessToken');
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.accessToken
  });

  constructor(private httpClient: HttpClient) { }

  public listCollection(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}collection`, { headers: this.httpHeaders });
  }

  public registerBook(book: BookModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}collection`, book, { headers: this.httpHeaders });
  }

  public editBook(bookId: string, book: BookModel): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}collection/${bookId}`, book, { headers: this.httpHeaders });
  }

  public deleteBook(bookId: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}collection/${bookId}`, { headers: this.httpHeaders });
  }
}