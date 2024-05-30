import { Component, Input } from '@angular/core';
import { IProducts } from '../../models/model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input()
  public products: IProducts[] = [];

  @Input()
  public searchValue:string=''
}