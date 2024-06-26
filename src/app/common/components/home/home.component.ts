import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICategory, IProducts } from '../../models/model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public api = inject(ApiService);
  public products: IProducts[] = [];
  public categories: ICategory[] = [];

  ngOnInit(): void {
    this.api.getProducts()
      .subscribe({
        next: response => {
          this.products = response;
        },
        error: error => {
          if (error instanceof HttpErrorResponse) {
            console.log(error.error);
          }
        }
      });

    this.api.getAllCategories()
      .subscribe({
        next: response => {
          this.categories = response;
        },
        error: error => {
          if (error instanceof HttpErrorResponse) {
            console.log(error.error);
          }
        }
      });
  }
}
