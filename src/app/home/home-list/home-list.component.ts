import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from 'src/app/Prestations/shared/model/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent {
  @Input() serviceList: any[] = []

  constructor(private route: Router) {    
  }

  navigate(url: string) {
    this.route.navigate([url]);
  }
  
}
