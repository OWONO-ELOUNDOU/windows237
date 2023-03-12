import { Component } from '@angular/core';

import { FreeService } from '../service/free.service';
import { File } from '../shared/model/file';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {

  allFiles: File[] = [];

  constructor(
    private freeService: FreeService
  ) { }

  ngOnInit(): void{
    this.freeService.getFileData().subscribe({
      next: allFiles => this.allFiles = allFiles
    });
    console.log(this.allFiles);
  }

}
