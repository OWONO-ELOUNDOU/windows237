import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ProgressHelperService } from '../service/progress-helper.service';

@Directive({
  selector: '[progressStepNext], [progressStepPrev]'
})
export class ProgressStepDirective implements OnInit {

  @Input('progressStepNext') next;
  @Input('progressStepPrev') prev;

  private methods = {
    prev: false,
    next: false
  }

  @HostListener('click', ['$event']) listen(e) {
    this.progressHelper.eventHelper.next(this.methods);
  }

  constructor(
    private progressHelper: ProgressHelperService,
    private el: ElementRef<HTMLButtonElement>
  ) { }

  ngOnInit(): void {
      this.initMethods();
  }

  private initMethods() {
    if('next' in this) {
      this.methods = {
        ...this.methods,
        next: true
      }
    }

    if('prev' in this) {
      this.methods = {
        ...this.methods,
        prev: true
      }
    }
  }

}
