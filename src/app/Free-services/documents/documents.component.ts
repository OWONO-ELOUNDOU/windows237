import { Component } from '@angular/core';

import { FreeService } from '../service/free.service';
import { File } from '../shared/model/file';
import { map } from 'rxjs';

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
    this.freeService.getFileData().pipe(map((res) => {
      const files = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          files.push({...res[key], id: key})
        }
      }
      return files;
    }))
    .subscribe((files) => {
      console.log(files);
      this.allFiles = files; 
    });
    console.log(this.allFiles);
  }

}
