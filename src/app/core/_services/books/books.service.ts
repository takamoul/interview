import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
private booksUrl = environment.Url_Live
constructor(private http: HttpClient) {
  this.getAllBooks()
 }
public getAllBooks() {
  return this.http.get(this.booksUrl)
 }
}
