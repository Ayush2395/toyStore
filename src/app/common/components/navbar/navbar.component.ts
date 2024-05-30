import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private api = inject(ApiService);
  public user = this.api.user;

  public logout() {
    this.api.logout();
  }
}
