import { Component } from '@angular/core';

import { HomeService } from '../services/Home/home.service';
import { map } from 'rxjs';
import { Feedback } from '../model/feedback';
import { activities } from '../Prestations/shared/model/activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  logo = 'assets/images/icon/favicon.png';
  image = 'assets/images/icon/bg1.png';
  site = 'https://windows237.net/home';
  adminLink = 'list#admin';
  professionalLink = 'list#professional';
  coursesLink = 'list#courses';
  feedback: Feedback[] = [];
  services = activities;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void{
    this.fecthFeedback();
    // this.userLocationInfo();
  }

  onSubmit(feedback: {
    username: string;
    feedback: string;
  }) {
    // console.log(feedback);
    this.homeService.postFeedback(feedback);
  }

  private fecthFeedback() {
    this.homeService.getFeedBack().pipe(map((res) => {
      const feedback = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          feedback.push({...res[key], id: key})
        }
      }
      return feedback;
    }))
    .subscribe((feedback) => {
      console.log(feedback);
      this.feedback = feedback;
    });
    console.log(this.feedback);
  }

  private userLocationInfo() {
    this.homeService.getUserInfo()
  }

}
