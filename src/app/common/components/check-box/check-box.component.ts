import { Component, Input } from '@angular/core';
import { ICategory } from '../../models/model';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss'
})
export class CheckBoxComponent {
  @Input()
  public categories: ICategory[] = [];
}
