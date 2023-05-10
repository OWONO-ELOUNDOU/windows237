import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/Contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isLoading = false;

  constructor(
    private contactService: ContactService
  ) {}

  ngOnInit(): void{
  
  }

  onSubmit(contactForm: {
    username: string,
    email: string,
    phone: string,
    message: string
  }) {
    this.isLoading = true;
    this.contactService.sendMessage(contactForm).subscribe((res) => {
      console.log(res);
      this.isLoading = false;
    }, (error) => {
      console.log(error);
      this.isLoading = false;
    })
  }

}
