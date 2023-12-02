import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  icon = "assets/images/icon/logo.png";
  smallIcon = "assets/images/icon/favicon.png";
  isMenuOpen = false;

  user = localStorage.getItem('userData')

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  };

  itemCount() {
    //return this.cartService.itemsCount();
  }

}
