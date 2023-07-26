import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  faFileCirclePlus,
  faObjectGroup
} from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { PDFDocument } from 'pdf-lib';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { AddPageOptions } from '../user/models/file-model';
@Component({
  selector: 'ptg-ui-modify-pdf-pages',
  templateUrl: './modify-pdf-pages.component.html',
  styleUrls: ['./modify-pdf-pages.component.scss'],
})
export class ModifyPdfPagesComponent implements OnInit {
  subscriptions: Subscription[] = [];

  showAddPageCustom: boolean;
  showDownload: boolean;
  showAddPage: boolean;
  showMergePdf: boolean;
  isMerged: boolean = false;
  loading: boolean = false;

  modalRef?: BsModalRef;
  selectAddPageInputForm: FormGroup;
  uploadSecondPdfForm: FormGroup;
  blob: Blob;

  selectedAddPage: string;
  fileNameOnSave: string;
  successMessage: string;
  errorMessage: string;
  pdfSrc: string;
  fileName: string;
  file: string;
  fileUrl2: string;
  uplodedMergedFile: string;
  mergedPdfLink: string;

  selectedFileBLOB: any;
  bytes: Uint8Array;
  mergedPdfFile: Uint8Array;
  
  // font Awesome
  faFileCirclePlus = faFileCirclePlus;
  faObjectGroup = faObjectGroup;
  config = {
    ignoreBackdropClick: true,
  };

  addPageOptions: AddPageOptions[] = [
    {
      id: '1',
      name: 'at Start',
      default: true,
    },
    {
      id: '2',
      name: 'at Last',
      default: false,
    },
    {
      id: '3',
      name: 'at Custom page',
      default: false,
    },
  ];
  @Input() pages: any;
  @Input() fileUrl1: any;
  @Input() firstDonorBytes: Uint8Array;
  @Input() fileDataName: string;
  @Input() fileDataId: string;
  @Output() callAddPageEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() callMergePdfEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer,
    private toastrService: ToastrService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectAddPageInputForm = this.formBuilder.group({
      selectPage: [null, [Validators.required]],
    });
    this.uploadSecondPdfForm = this.formBuilder.group({
      file: [''],
    });
  }

  async fileChangeEvent(fileInput: any) {
    this.uplodedMergedFile = fileInput;
    if (fileInput.target.files && fileInput.target.files[0]) {
      const file:string = fileInput.target.files[0];
      this.uploadSecondPdfForm.get('file')?.setValue(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const blob = new Blob(fileInput.target.files, {
          type: fileInput.target.files[0].type,
        });
        this.fileUrl2 = window.URL.createObjectURL(blob);
        this.selectedFileBLOB = this.sanitizer.bypassSecurityTrustUrl(
          this.fileUrl2
        );
        this.pdfSrc =
          this.selectedFileBLOB.changingThisBreaksApplicationSecurity;
        this.fileName = fileInput.target.files[0].name;
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  async loadPdf() {
    const secondDonorPdfBytes = await fetch(this.fileUrl2).then((res) =>
      res.arrayBuffer()
    );
    //load both the pdfs  
    const pdf1 = await PDFDocument.load(this.firstDonorBytes);
    const pdf2 = await PDFDocument.load(secondDonorPdfBytes);
    //create a new pdf
    let mergedPdf = await PDFDocument.create();

    //copy the pdfs
    const copiedPagesA = await mergedPdf.copyPages(pdf1, pdf1.getPageIndices());
    copiedPagesA.forEach((page) => mergedPdf.addPage(page));
    const copiedPagesB = await mergedPdf.copyPages(pdf2, pdf2.getPageIndices());
    copiedPagesB.forEach((page) => mergedPdf.addPage(page));
    //merge the pdfs
    this.mergedPdfFile = await mergedPdf.save();
    this.bytes = await new Uint8Array(this.mergedPdfFile);
    this.blob = await new Blob([this.bytes], { type: 'application/pdf' });
    // const url = await URL.createObjectURL(blob);
    // const mergedPdf = await PDFDocument.load(this.mergedPdfFile);
  }
  async onSave() {
    const formData = new FormData();
    const isSignedVal = localStorage.getItem('isSigned');
    formData.append('fileId', this.fileDataId);
    formData.append('fileName', this.fileDataName);
    formData.append('mergedPdf', this.fileNameOnSave);
    formData.append('file', this.blob);
    formData.append('fileType', 'document');
    if (isSignedVal) {
      formData.append('isSigned', isSignedVal);
    }

    this.loading = true;
    let subscription = this.userService.saveFile(formData).subscribe({
      next: (res: any) => {
        this.closeModifyPdfPageModal();
        this.loading = false;
        this.successMessage = res.message;
        this.callMergePdfEvent.emit();
        this.router.navigate(['/dashboard/saved-documents']);
      },
      error: (err) => {
        this.errorMessage = err.message;

      },
      complete: () => {},
    });
    this.subscriptions.push(subscription);
  }

  onDownload() {
    this.downloader(this.mergedPdfFile, 'application/pdf', this.fileNameOnSave);
  }

  async downloader(data: any, type: any, name: any) {
    let blob = new Blob([data], { type });
    let url = window.URL.createObjectURL(blob);
    this.downloadURI(url, name);
    window.URL.revokeObjectURL(url);
  }

  async downloadURI(uri: string, name: string) {
    let link = document.createElement('a');
    link.download = name;
    link.href = uri;
    link.click();
  }

  onAddPageRadioSelect(item: any) {
    if (this.selectedAddPage === item.name) {
      return;
    }
    this.selectedAddPage = item.name;
    if (item.name === 'at Custom page') {
      this.showAddPageCustom = true;
    }
    if (item.name === 'at Start' || item.name === 'at Last') {
      this.showAddPageCustom = false;
    }
    this.onChange(this.selectedAddPage);
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  openAddPageModal(template: TemplateRef<any>, value: string) {
    if (value === 'addPage') {
      this.showAddPage = true;
    }
    if (value === 'mergePdf') {
      this.showMergePdf = true;
    }
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModifyPdfPageModal() {
    this.modalRef?.hide();
    this.showAddPage = false;
    this.showMergePdf = false;
    this.showDownload = false;
  }

  uploadFileToMerge() {
    if (!this.uplodedMergedFile) {
      this.toastrService.warning('please choose a file', 'file not chosen', {
        timeOut: 3000,
      });
      return;
    }
    const formData = new FormData();
    formData.append('file', this.uploadSecondPdfForm.get('file')?.value);
    formData.append('fileType', 'document');
    const fileNameonSave = localStorage.getItem('uploadedFile');
    if (fileNameonSave) {
      this.fileNameOnSave = fileNameonSave
        .split('.')
        .slice(0, -1)
        .join('.')
        .concat('_merged_', this.fileName);
    }
    this.loadPdf();
    this.loading = true;
    this.showMergePdf = false;
    this.showDownload = true;
  }

  cancelAllSubscriptions() {
    this.subscriptions.forEach((subscrition) => {
      subscrition.unsubscribe();
    });
    this.subscriptions = [];
  }

  ngOnDestroy() {
    this.cancelAllSubscriptions();
  }
}
