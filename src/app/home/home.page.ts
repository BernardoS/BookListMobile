import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public books : Object = [
    {
      Id: 0,
      Titulo: "",
      Autor: "",
      Preco: 0,
      Link: ""
    },
  ]
  constructor(private apiService: ApiService) {
    //this.createBook();
    //this.getBook()
    this.getBooks();
    //this.updateBook();
    //this.deleteBook();
  }

  getBooks(){
    this.apiService.getBooks().subscribe(data=>{
      this.books = data;
      console.log(data);
    })
  }

}
