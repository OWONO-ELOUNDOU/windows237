import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feedback } from 'src/app/model/feedback';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  @Input() feedbacks: Feedback[] = [];

  selectedIndex = 0;

  // showPrev(i: number) {
  //   if (this.selectedIndex > 0){
  //     this.selectedIndex = i - 1;
  //   }
  // }

  // showNext(i: number) {
  //   if(this.selectedIndex < this.feedbacks?.length - 1) {
  //     this.selectedIndex = i + 1;
  //   }
  // }
}
