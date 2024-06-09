import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
private Bas_Url = environment.Bas_Url
constructor(private http: HttpClient) {
  this.getAllBooks()
 }
public getAllBooks() {
  return this.http.get(this.Bas_Url+'?q=the+lord+of+the+rings&page=2')
 }
 public searchOnBooks(q:string) {
  return this.http.get(`${this.Bas_Url}?q=${q}`)
 }
}
