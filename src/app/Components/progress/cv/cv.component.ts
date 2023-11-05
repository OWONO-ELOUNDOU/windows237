import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  logo = 'assets/images/icon/favicon.png';
  isFact1 = false;
  isFact2 = false;
  isFact3 = false;

  constructor() { }

  ngOnInit(): void{
    
  }

  showFact1() {
    this.isFact1 = !this.isFact1;
    if(this.isFact2 || this.isFact3){
      this.isFact2 = false;
      this.isFact3 = false;
    }
  }
  showFact2() {
    this.isFact2 = !this.isFact2;
    if(this.isFact1 || this.isFact3){
      this.isFact1 = false;
      this.isFact3 = false;
    }
  }
  showFact3() {
    this.isFact3 = !this.isFact3;
    if(this.isFact2 || this.isFact1){
      this.isFact2 = false;
      this.isFact1 = false;
    }
  }

}
