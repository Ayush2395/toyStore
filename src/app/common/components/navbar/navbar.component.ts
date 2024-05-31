import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public api = inject(ApiService);
  public user = this.api.user;

  public logout() {
    this.api.logout();
  }

  @ViewChild("search")
  private searchInput: ElementRef<HTMLInputElement> | null = null;

  @HostListener("window:keydown", ['$event'])
  private handleShortcut(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      this.searchInput?.nativeElement.focus();
    }
  }
}
