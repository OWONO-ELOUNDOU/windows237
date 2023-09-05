import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ProgressHelperService } from '../service/progress-helper.service';
import { Status, UiHelper, UiState } from '../uiHelper';
import { ProgressStepDirective } from '../directive/progress-step.directive';
import { ProgressStepComponent } from '../progress-step/progress-step.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent extends UiHelper implements OnInit {

  itemLength: number;

  @Input() public set selectedIndex(value) {
    this.selectedIndex = value || 0;
  }

  @ContentChildren(ProgressStepComponent) public steps: QueryList<ProgressStepComponent>;

  constructor(protected override progressHelper: ProgressHelperService) {
    super(progressHelper);
  }

  ngOnInit(): void{

  }

  ngAfterContentInit() {
    this.initProgress(this.progressSteps.length);
    this.setActiveStep(this.activeIndex);
    this.initStepIndex();
  }

  private setActiveStep(activeIndex: number) {
    if(this.stepsExist) {
      this.removeActiveStep();
      this.updateActiveStep(activeIndex);
    }
  }

  removeActiveStep() {
    this.progressSteps.map((step) => {
      if(step.isActive) {
        step.isActive = false;
      }
    })
  }

  updateActiveStep(index: any) {
    this.progressSteps[index].activeState = this.progressSteps[index];
  }

  private initStepIndex() {
    this.progressSteps.forEach((step, i) => (step.stepIndex =i));
  }

  public get activeStep(): ProgressStepComponent {
    return this.progressSteps[this.activeIndex];
  }

  private get progressSteps(): ProgressStepComponent[] {
    return this.steps.toArray();
  }

  private get stepsExist(): boolean {
    return this.progressSteps && Array.isArray(this.progressSteps);
  }

  private initProgress(value): void {
    this.itemLength = value || 0;
    this.itemProgressList = this.generateProgressArray(this.itemLength);
  }
  private generateProgressArray(Length: number): { stepIndex: number; status: string; }[] {
    return [...Array(Length).keys()].map((key) => {
      return {
        stepIndex: key,
        status: key === this.activeIndex ? Status.IN_PROGRESS : Status.PENDING
      }
    })
  }
}
