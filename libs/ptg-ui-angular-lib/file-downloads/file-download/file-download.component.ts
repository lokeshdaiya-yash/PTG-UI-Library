/**
 * @since March 2022
 * @author Akshay
 * @Component Download;
 * @description This module used for reusable Download
 * @UpdatedBy Aakash Patidar
 * @PackageUrls https://www.npmjs.com/package/html-to-image, https://www.npmjs.com/package/jspdf
 */

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { toPng } from 'html-to-image';
// import { FILE_TYPE } from '@ptg-angular-app/mock/mocks';
import html2canvas from 'html2canvas';
enum FileType {
  PDF = 'PDF',
  EXCEL = 'EXCEL',
  WORD = 'WORD',
  PNG = 'PNG',
}


@Component({
  selector: 'ptg-ui-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss']
})
export class FileDownloadComponent implements OnInit {
  // optionsList: any[] = options;
  FILE_TYPE = [
    {
      id: '1',
      name: 'PDF',
      value: 'PDF',
    },
    {
      id: '2',
      name: 'Excel',
      value: 'EXCEL',
    },
    {
      id: '3',
      name: 'Word',
      value: 'WORD',
    },
    {
      id: '4',
      name: 'Download PNG',
      value: 'PNG',
    },
  ];

 
  fileTypeList: any
  @ViewChild('b_download') b_download!: ElementRef;
  @Input() tableData: any;
  fileType: string = '';

  ngOnInit(): void {
    this.fileTypeList = this.FILE_TYPE;
  }

  // get file type from dropdown 
  onChange(event: any) {
    this.fileType = event.value;
  }

  // Download file according to type 
  downloadFile() {
    console.log(this.fileType);
    const fileType = this.fileType;
    switch (fileType) {
      case FileType.EXCEL:
        this.downloadExcelFile();
        break;
      case FileType.PNG:
        this.downloadimage();
        break;
      case FileType.WORD:
        this.downloadWordFile();
        break;
      case FileType.PDF:
        this.downloadPdfFile();
        break;
    }
  }

  // Supportive function that are used in all other main function  
  generateBlob(data: string, type: string) {
    return new Blob([data], { type });
  }

  createTable() {
    let table: any = <HTMLFormElement>this.b_download.nativeElement;
    return table.outerHTML.toString();
  }

  getElementAndAsignBlob(blob: Blob, fileName: string) {
    let element = document.createElement('a');
    element.href = URL.createObjectURL(blob);
    element.download = fileName;
    element.click();
  }

  // Supportive functions end here 

  // Main function start from here
  // EXCEL downloading functionlity 
  downloadExcelFile(): void {
    const blob: Blob = this.generateBlob(
      this.createTable(),
      'application/vnd.ms-excel'
    );
    this.getElementAndAsignBlob(blob, 'example.xls');
  }

  // WORD downloading functionlity 
  downloadWordFile() {
    const blob: Blob = this.generateBlob(
      this.createTable(),
      'application/msword'
    );
    this.getElementAndAsignBlob(blob, 'example.doc');
  }

  // PDF downloading functionlity 
  downloadPdfFile(): void {
    let DATA: any = this.b_download.nativeElement;
    html2canvas(DATA).then((canvas: any) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('example.pdf');
    });
  }

  // Image Downloading Function 
  downloadimage() {
    const myTable: any = <HTMLFormElement>this.b_download.nativeElement;
    toPng(myTable)
      .then((dataUrl: any) => {
        let link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'example.png';
        link.click();
      })
      .catch((error: any) => {
        console.log(error)
      });
  }

}
