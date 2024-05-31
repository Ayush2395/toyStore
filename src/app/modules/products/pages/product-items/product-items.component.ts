import { Component, OnInit, inject } from '@angular/core';
import { IProducts } from '../../../../common/models/model';
import { ApiService } from '../../../../common/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.scss'
})
export class ProductItemsComponent implements OnInit {
  private api = inject(ApiService);
  private activatedRoute = inject(ActivatedRoute);
  public productItem: IProducts | null = null;
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe({
      next: (value) => {
        const { productId } = value;
        this.api.getProductsById(productId)
          .subscribe({
            next: response => {
              this.productItem = response;
            }
          });
      },
    });

  }
}
