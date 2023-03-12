import { Component } from '@angular/core';

import { File } from '../shared/model/file';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent {

  constructor(
    private dashService: DashboardService
  ) { }

  onSubmit(file: File) {
    this.dashService.addFile(file);
  }
}
