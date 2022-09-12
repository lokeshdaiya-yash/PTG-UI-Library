import { Component } from '@angular/core';
import { TABLE_DATA } from '@ptg-angular-app/mock/mocks';
import { resources } from "../../../resource/resource";
@Component({
  selector: 'ptg-ui-download-example',
  templateUrl: './download-example.component.html',
  styleUrls: ['./download-example.component.scss']
})
export class DownloadExampleComponent {
  tableData = TABLE_DATA
  resources=resources;
}
