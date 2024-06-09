import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../../core/_services/books/books.service';
import { CommonModule } from "@angular/common";

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],  standalone: true,
    imports: [CdkDropList, CdkDrag,CommonModule,
    MatProgressSpinnerModule
      ],
})
export class BooksComponent implements OnInit {
  searchText = ''
   books:any =[]
   filteredBooks:any =[]
   selectBooks:any =[]
    colorsPicker:any =[
  {id:1,color:"#f2dba0"},
  {id:2,color:"#e3f4ff"},
  {id:3,color:"#e4bcbc"}
]
timer: any
 isSpinner= true
currentColor:any = this.colorsPicker[0]
  constructor(private booksService:BooksService) { }


  ngOnInit() {
    this.booksService.getAllBooks().subscribe({
      next: (res:any) => {
        this.books = res.docs
        this.filteredBooks = res.docs
        this.filteredBooks.length > 0 ?  this.isSpinner  = false : true

      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
changeColor(color:any){
  this.currentColor = color
}
searchByTitle(event:any){
  this.isSpinner = true
  this.filteredBooks =[]
  clearTimeout(this.timer)
  this.searchText = event.target.value
  this.timer  = setTimeout(()=>{
    if(!this.searchText){
      this.searchText ="the lord of the rings"
    }
    const encodedQuery = encodeURIComponent(this.searchText.replace(/ /g, '+'));
    this.booksService.searchOnBooks(encodedQuery).subscribe((res:any)=>{
      this.filteredBooks = res.docs
      console.log("this.filteredBooks",this.filteredBooks)
      console.log(" res.docs", res.docs)
      this.isSpinner = false
    })
  },1500)

}
removeBook(book: any): void {
  // Find the index of the book in the selectBooks array
  let index = this.selectBooks.findIndex((b: any) => b.key === book.key);

  if (index !== -1) {
    // Remove the book from selectBooks array
    this.selectBooks.splice(index, 1);

    // Prepend the book to the filteredBooks and books arrays
    this.filteredBooks.unshift(book);
  }
}
}
