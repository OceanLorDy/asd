import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient) { }
  title = "Product List"
  filterText = "a"
  products !: Product[];
  path = "http://localhost:3000/products";

  ngOnInit(): void {
    this.http.get<Product[]>(this.path).subscribe(data=>{
      this.products = data
    });
  }

}
