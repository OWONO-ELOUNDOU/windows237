import { ProgressHelperService } from "./service/progress-helper.service";

export enum UiState {
    ACTIVE = 'active',
    COMPLETE = 'complete'
}

export enum Status {
    PENDING = 'pending',
    IN_PROGRESS = 'in progress',
    COMPLETED = 'completed'
}

export class UiHelper {
    public itemProgressList: { stepIndex: number; status: string }[] = [];
    public activeIndex = 0;

    constructor(protected progressHelper: ProgressHelperService) {}

    protected switchStatusNext(index): void {
        
    }

    protected switchStatusPrev(index): void {

    }
}