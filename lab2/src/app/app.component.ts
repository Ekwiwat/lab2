import { Component, ViewChild, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('productList')
  productList: ProductListComponent;
  products: Product[];

  ngOnInit(): void {
    this.productList.products = [
      {
        name: 'ส้มโอ',
        price: 111
      },
      {
        name: 'แตงโม',
        price: 222
      }, {
        name: 'มะพร้าวน้ำหอม',
        price: 333
      }
    ];

  }
}