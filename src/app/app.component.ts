import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from './services/Auth/auth.service';
import { ModalService } from './Components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'windows237';

  constructor(
    private AuthService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void{
    this.AuthService.autoLogin();
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
    .open(modalTemplate, {size: 'lg', title: 'Foo'})
  }
}
