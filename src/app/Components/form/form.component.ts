import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() form: Form;

  constructor(){
    
  }

}
