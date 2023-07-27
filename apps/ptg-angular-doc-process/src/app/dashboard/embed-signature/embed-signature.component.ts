/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { UserService } from '../../services/user.service';
// import { FileModel } from '../user/models/all-model';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import {
  faBold,
  faClone,
  faCoffee,
  faFloppyDisk,
  faItalic,
  faPalette,
  faTrashCan,
  faUnderline,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AddSignatureComponent } from '../add-signature/add-signature.component';
import { AddTextComponent } from '../add-text/add-text.component';
import { ModifyPdfPagesComponent } from '../modify-pdf-pages/modify-pdf-pages.component';
import { AddPageOptions } from '../user/models/file-model';

@Component({
  selector: 'ptg-ui-embed-signature',
  templateUrl: './embed-signature.component.html',
  styleUrls: ['./embed-signature.component.scss'],
})
export class EmbedSignatureComponent implements OnInit {
  subscriptions: Subscription[] = [];
  modalRef?: BsModalRef;
  inputValue: string | null;
  signaturePlacedOptions: FormGroup;
  showCustomPageInputs: boolean = false;
  url: string;
  isSignature: boolean = false;
  signatureImg: any;
  profileImage: any;
  inputText: string | null;
  fileId: string;
  fileDetails: any;
  filePath: any = environment.fileAccessPath;
  pages: any;
  selectedValue: any;
  loading: boolean = false;
  errorMessage: string | null;
  successMessage: string | null;
  isFileSaving: boolean = false;
  selectPageInput: boolean = false;
  selectedPage: number;
  selectedPageCustomFrom: number;
  selectedPageCustomTo: number;
  existingPdfBytes: ArrayBuffer;
  pdfDoc: PDFDocument;
  selectCustomInput: boolean = false;
  bytes: Uint8Array;
  blob: Blob;
  elementFontStyle: string;
  elementFontWeight: string;
  isSigned: boolean = false;
  isUploaded: boolean = false;
  signaturePlaced: boolean = false;
  textPlaced: boolean = false;
  imagePlaced: boolean = false;
  selectPageInputForm: FormGroup;
  selectCustomInputForm: FormGroup;
  isSignDraggable: boolean = true;
  isTextDraggable: boolean = true;
  isImageDraggable: boolean = true;
  opened: boolean;
  events: string[] = [];
  pageVariable: number = 1;
  pageWidth: string = '100%';
  scale: number;
  fileUrl1: string;
  fileDataId: any;
  fileDataName: any;
  placeSignatureImage: boolean;
  placeProfileImage: boolean;
  pdfBytes: Uint8Array | any;
  items: AddPageOptions[] = [
    {
      id: 'allPages',
      name: 'All Pages',
      default: true,
    },
    {
      id: 'selectPages',
      name: 'Select Page',
      default: false,
    },
    {
      id: 'allPagesButLast',
      name: 'All Pages But Last',
      default: false,
    },
    {
      id: 'lastPage',
      name: 'Last Page',
      default: false,
    },
    {
      id: 'customPages',
      name: 'Custom Pages',
      default: false,
    },
    {
      id: 'currentPage',
      name: 'Current Page',
      default: false,
    },
  ];
  //font awesome
  faCoffee = faCoffee;
  faItalic = faItalic;
  faBold = faBold;
  faUnderline = faUnderline;
  faPalette = faPalette;
  faXmark = faXmark;
  faClone = faClone;
  faFloppyDisk = faFloppyDisk;
  faTrashCan = faTrashCan;
  //form validation
  bothSelectValueSame: boolean;
  fromGreaterThenTo: boolean;
  toLessThanfrom: boolean;
  selectCustomValid: boolean;
  isEditFileMode: boolean = false;
  // position variables
  offset = { x: 0, y: 0 };
  positionX: number;
  positionY: number;
  positionxX: number;
  positionyY: number;
  positionXxx: number;
  positionYyy: number;
  initialPosition = { x: 2, y: 2 };
  position = { ...this.initialPosition };

  @ViewChild(AddTextComponent) textComponenet: AddTextComponent;
  @ViewChild(AddSignatureComponent) signatureComponenet: AddSignatureComponent;
  @ViewChild(ModifyPdfPagesComponent)
  modifyPdfPagesComponent: ModifyPdfPagesComponent;
  config = {
    ignoreBackdropClick: true,
  };

  constructor(
    private formBuilder: FormBuilder,
    protected domSanitizer: DomSanitizer,
    private userService: UserService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let subscription = this.route.queryParamMap.subscribe({
      next: (res: any) => {
        this.isEditFileMode = res.params.isEditFileMode;
      },
    });
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    // if (localStorage.getItem('reloadPage')) {
    //   setTimeout(() => {
    //     localStorage.removeItem('reloadPage');
    //     window.location.reload();
    //   }, 200);
    // }
    let subscription = this.route.params.subscribe((params) => {
      this.fileId = atob(params.id);
    });
    this.subscriptions.push(subscription);
    if (this.fileId != '') {
      this.getFileDetails();
    }
    this.buildSignPlacedForm();
    this.selectPageInputForm = this.formBuilder.group({
      selectPage: [null, [Validators.required]],
    });
    this.selectCustomInputForm = this.formBuilder.group({
      selectedCustomPageFrom: [null, [Validators.required]],
      selectedCustomPageTo: [null, [Validators.required]],
    });
  }

  getFileDetails() {
    const data = {
      fileId: this.fileId,
      fileType: 'document',
    };
    this.loading = true;
    let subscription = this.userService.getFile(data).subscribe({
      next: (res: any) => {
        this.fileDetails = res;
        if (
          this.fileDetails &&
          this.fileDetails.data &&
          this.fileDetails.data.fileName
        ) {
          this.fileDataId = this.fileDetails.data._id;
          this.fileDataName = this.fileDetails.data.fileName;
          setTimeout(() => {
            this.url = this.filePath + this.fileDetails.data.fileName;
            this.loadPdf();
            this.loading = false;
          }, 2000);
        } else {
          this.loading = false;
        }
      },
      error: (err: any) => {
      },
      complete: () => {},
    });
    this.subscriptions.push(subscription);
  }

  buildSignPlacedForm() {
    this.signaturePlacedOptions = this.formBuilder.group({
      placedOption: new FormControl('onlyThisPage', []),
    });
  }

  async loadPdf() {
    this.existingPdfBytes = await fetch(this.url).then((res) =>
      res.arrayBuffer()
    );
    this.pdfDoc = await PDFDocument.load(this.existingPdfBytes);
    this.bytes = await new Uint8Array(this.existingPdfBytes);
    this.blob = await new Blob([this.bytes], { type: 'application/pdf' });
    this.pages = this.pdfDoc.getPages();
    this.pdfBytes = await this.pdfDoc.save();
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  onradioSelect(item: any) {
    this.selectedValue = item.name;
    if (this.selectedValue == 'Select Page') {
      this.selectPageInput = true;
    } else {
      this.selectPageInput = false;
    }
    if (this.selectedValue == 'Custom Pages') {
      this.selectCustomInput = true;
    } else {
      this.selectCustomInput = false;
    }
    this.onChange(this.selectedValue);
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }

  getSelectInputValues() {
    this.selectedPage = this.selectPageInputForm.get('selectPage')?.value;
    this.selectedPageCustomFrom = this.selectCustomInputForm.get(
      'selectedCustomPageFrom'
    )?.value;
    this.selectedPageCustomTo = this.selectCustomInputForm.get(
      'selectedCustomPageTo'
    )?.value;
  }

  async appendSignature() {
    if (
      (this.selectPageInput && !this.selectPageInputForm.valid) ||
      (this.selectCustomInput && !this.selectCustomInputForm.valid) ||
      (this.selectCustomInput && !this.selectCustomValid)
    ) {
      return;
    }
    if (this.placeSignatureImage) {
      this.isSignDraggable = false;
      this.getSelectInputValues();
      const imageBytes = await fetch(this.signatureImg).then((res) =>
        res.arrayBuffer()
      );
      const pngImage = await this.pdfDoc.embedPng(imageBytes);
      this.isSigned = true;
      localStorage.setItem('isSigned', 'true');
      this.closeSignPlacedModal();
      //closing add/edit signature
      this.signaturePlaced = true;
      switch (this.selectedValue) {
        case 'Select Page':
          if (this.selectedPage <= this.pages.length && this.selectedPage > 0) {
            var page = this.pages[this.selectedPage - 1];
            page.drawImage(pngImage, {
              x: this.positionX,
              y: this.positionY,
              width: pngImage.width / 2,
              height: pngImage.height / 2,
            });
          }
          break;
        case 'Last Page':
          var page = this.pages[this.pages.length - 1];
          page.drawImage(pngImage, {
            x: this.positionX,
            y: this.positionY,
            width: pngImage.width / 2,
            height: pngImage.height / 2,
          });
          break;
        case 'All Pages':
          for (let j = 0; j < this.pages.length; j++) {
            var page = this.pages[j];
            // page.moveTo(200, page.getHeight());
            // page.moveDown(350);
            page.drawImage(pngImage, {
              x: this.positionX,
              y: this.positionY,
              width: pngImage.width / 2,
              height: pngImage.height / 2,
            });
          }
          break;
        case 'All Pages But Last':
          for (let j = 0; j < this.pages.length - 1; j++) {
            var page = this.pages[j];
            // page.moveTo(200, page.getHeight());
            // page.moveDown(350);
            page.drawImage(pngImage, {
              x: this.positionX,
              y: this.positionY,
              width: pngImage.width / 2,
              height: pngImage.height / 2,
            });
          }
          break;
        case 'Current Page':
          var page = this.pages[this.pageVariable - 1];
          page.drawImage(pngImage, {
            x: this.positionX,
            y: this.positionY,
            width: pngImage.width / 2,
            height: pngImage.height / 2,
          });
          break;
        case 'Custom Pages':
          if (
            this.selectedPageCustomTo > this.selectedPageCustomFrom &&
            this.selectedPageCustomTo <= this.pages.length &&
            this.selectedPageCustomFrom > 0
          ) {
            for (
              let j = this.selectedPageCustomFrom;
              j <= this.selectedPageCustomTo;
              j++
            ) {
              var page = this.pages[j - 1];
              // page.moveTo(200, page.getHeight());
              // page.moveDown(350);
              page.drawImage(pngImage, {
                x: this.positionX,
                y: this.positionY,
                width: pngImage.width / 2,
                height: pngImage.height / 2,
              });
            }
          }
          break;
        default:
          break;
      }
      this.isSignDraggable = false;
      this.signatureImg = null;
    }
    if (this.placeProfileImage) {
      this.isImageDraggable = false;
      this.getSelectInputValues();
      const imageBytes = await fetch(this.profileImage).then((res) =>
        res.arrayBuffer()
      );
      const pngImage = await this.pdfDoc.embedPng(imageBytes);
      this.isUploaded = true;
      this.closeSignPlacedModal();
      //closing add/edit signature
      this.imagePlaced = true;
      switch (this.selectedValue) {
        case 'Select Page':
          if (this.selectedPage <= this.pages.length && this.selectedPage > 0) {
            var page = this.pages[this.selectedPage - 1];
            page.drawImage(pngImage, {
              x: this.positionXxx,
              y: this.positionYyy,
              width: pngImage.width / 2,
              height: pngImage.height / 2,
            });
          }
          break;
        case 'Last Page':
          var page = this.pages[this.pages.length - 1];
          page.drawImage(pngImage, {
            x: this.positionXxx,
            y: this.positionYyy,
            width: pngImage.width / 2,
            height: pngImage.height / 2,
          });
          break;
        case 'All Pages':
          for (let j = 0; j < this.pages.length; j++) {
            var page = this.pages[j];
            // page.moveTo(200, page.getHeight());
            // page.moveDown(350);
            page.drawImage(pngImage, {
              x: this.positionXxx,
              y: this.positionYyy,
              width: pngImage.width / 2,
              height: pngImage.height / 2,
            });
          }
          break;
        case 'All Pages But Last':
          for (let j = 0; j < this.pages.length - 1; j++) {
            var page = this.pages[j];
            // page.moveTo(200, page.getHeight());
            // page.moveDown(350);
            page.drawImage(pngImage, {
              x: this.positionXxx,
              y: this.positionYyy,
              width: pngImage.width / 2,
              height: pngImage.height / 2,
            });
          }
          break;
        case 'Current Page':
          var page = this.pages[this.pageVariable - 1];
          page.drawImage(pngImage, {
            x: this.positionXxx,
            y: this.positionYyy,
            width: pngImage.width / 2,
            height: pngImage.height / 2,
          });
          break;
        case 'Custom Pages':
          if (
            this.selectedPageCustomTo > this.selectedPageCustomFrom &&
            this.selectedPageCustomTo <= this.pages.length &&
            this.selectedPageCustomFrom > 0
          ) {
            for (
              let j = this.selectedPageCustomFrom;
              j <= this.selectedPageCustomTo;
              j++
            ) {
              var page = this.pages[j - 1];
              // page.moveTo(200, page.getHeight());
              // page.moveDown(350);
              page.drawImage(pngImage, {
                x: this.positionXxx,
                y: this.positionYyy,
                width: pngImage.width / 2,
                height: pngImage.height / 2,
              });
            }
          }
          break;
        default:
          break;
      }
      this.isImageDraggable = false;
      this.profileImage = null;
    }
    this.pdfBytes = await this.pdfDoc.save();
    this.bytes = await new Uint8Array(this.pdfBytes);
    this.blob = await new Blob([this.bytes], { type: 'application/pdf' });
    this.url = await URL.createObjectURL(this.blob);
    this.pdfDoc = await PDFDocument.load(this.pdfBytes);
    this.pages = this.pdfDoc.getPages();
  }

  async appendDraggedSignature() {
    this.isSignDraggable = false;
    this.getSelectInputValues();
    const imageBytes = await fetch(this.signatureImg).then((res) =>
      res.arrayBuffer()
    );
    const pngImage = await this.pdfDoc.embedPng(imageBytes);
    this.isSigned = true;
    //closing add/edit signature
    this.signaturePlaced = true;
    let page = this.pages[this.pageVariable - 1];
    page.drawImage(pngImage, {
      x: this.positionX,
      y: this.positionY,
      width: pngImage.width / 2,
      height: pngImage.height / 2,
    });
    this.isSignDraggable = false;
    this.pdfBytes = await this.pdfDoc.save();
    this.bytes = await new Uint8Array(this.pdfBytes);
    this.blob = await new Blob([this.bytes], { type: 'application/pdf' });
    this.url = await URL.createObjectURL(this.blob);
    this.pdfDoc = await PDFDocument.load(this.pdfBytes);
    this.pages = this.pdfDoc.getPages();
  }

  //for adding text on pdf
  async appendText() {
    if (
      (this.selectPageInput && !this.selectPageInputForm.valid) ||
      (this.selectCustomInput && !this.selectCustomInputForm.valid) ||
      (this.selectCustomInput && !this.selectCustomValid)
    ) {
      return;
    }
    this.getSelectInputValues();
    let inputText: HTMLElement = document.getElementById('inputText')!;
    let elFontSize = parseFloat(getComputedStyle(inputText).fontSize);
    let elFontColor = getComputedStyle(inputText).color; // rgb(r,g,b)
    let elFontColorRGB = elFontColor
      .substring(4, elFontColor.length - 1)
      .replace(/ /g, '')
      .split(','); //[r,g,b]
    //Conversion of rgb values between 0 to 1
    let r = parseFloat(Number(parseFloat(elFontColorRGB[0]) / 255).toFixed(2));
    let g = parseFloat(Number(parseFloat(elFontColorRGB[1]) / 255).toFixed(2));
    let b = parseFloat(Number(parseFloat(elFontColorRGB[2]) / 255).toFixed(2));
    // let text = document.getElementById('inputText');
    //Object.assign(inputText.style,{fontsize:elFontSize,color:elColor, fontWeight:elFontWeight,textDecoration:elTextDecoration,fontStyle:elFontStyle})
    let helveticaFont = await this.pdfDoc.embedFont(StandardFonts.Helvetica);
    if (
      inputText?.style.fontWeight == 'bolder' &&
      inputText?.style.fontStyle == 'undefined'
    ) {
      helveticaFont = await this.pdfDoc.embedFont(StandardFonts.HelveticaBold);
    } else if (
      inputText?.style.fontWeight == 'undefined' &&
      inputText?.style.fontStyle == 'italic'
    ) {
      helveticaFont = await this.pdfDoc.embedFont(
        StandardFonts.TimesRomanItalic
      );
    } else if (
      inputText?.style.fontWeight == 'bolder' &&
      inputText?.style.fontStyle == 'italic'
    ) {
      helveticaFont = await this.pdfDoc.embedFont(
        StandardFonts.TimesRomanBoldItalic
      );
    }
    this.closeSignPlacedModal();
    this.textPlaced = true;
    this.inputValue = null;
    switch (this.selectedValue) {
      case 'Select Page':
        if (this.selectedPage <= this.pages.length && this.selectedPage > 0) {
          var page = this.pages[this.selectedPage - 1];
          page.drawText(this.inputText, {
            x: this.positionxX,
            y: this.positionyY,
            font: helveticaFont,
            size: elFontSize,
            color: rgb(r, g, b),
          });
        }
        break;
      case 'Last Page':
        var page = this.pages[this.pages.length - 1];
        page.drawText(this.inputText, {
          x: this.positionxX,
          y: this.positionyY,
          font: helveticaFont,
          size: elFontSize,
          color: rgb(r, g, b),
        });
        break;
      case 'All Pages':
        for (let j = 0; j < this.pages.length; j++) {
          var page = this.pages[j];
          page.drawText(this.inputText, {
            x: this.positionxX,
            y: this.positionyY,
            font: helveticaFont,
            size: elFontSize,
            color: rgb(r, g, b),
          });
        }
        break;
      case 'All Pages But Last':
        for (let j = 0; j < this.pages.length - 1; j++) {
          var page = this.pages[j];
          page.drawText(this.inputText, {
            x: this.positionxX,
            y: this.positionyY,
            font: helveticaFont,
            size: elFontSize,
            color: rgb(r, g, b),
          });
        }
        break;
      case 'Current Page':
        var page = this.pages[this.pageVariable - 1];
        page.drawText(this.inputText, {
          x: this.positionxX,
          y: this.positionyY,
          font: helveticaFont,
          size: elFontSize,
          color: rgb(r, g, b),
        });
        break;
      case 'Custom Pages':
        if (
          this.selectedPageCustomTo > this.selectedPageCustomFrom &&
          this.selectedPageCustomTo <= this.pages.length &&
          this.selectedPageCustomFrom > 0
        ) {
          for (
            let j = this.selectedPageCustomFrom;
            j <= this.selectedPageCustomTo;
            j++
          ) {
            var page = this.pages[j - 1];
            page.drawText(this.inputText, {
              x: this.positionxX,
              y: this.positionyY,
              font: helveticaFont,
              size: elFontSize,
              color: rgb(r, g, b),
            });
          }
        }
        break;
      default:
        break;
    }
    this.elementFontStyle = 'undefined';
    this.elementFontWeight = 'undefined';
    this.isTextDraggable = false;
    this.pdfBytes = await this.pdfDoc.save();
    this.bytes = await new Uint8Array(this.pdfBytes);
    this.blob = await new Blob([this.bytes], { type: 'application/pdf' });
    this.url = await URL.createObjectURL(this.blob);
    this.pdfDoc = await PDFDocument.load(this.pdfBytes);
    this.pages = this.pdfDoc.getPages();
  }

  closeSignPlacedModal() {
    this.modalRef?.hide();
    this.buildSignPlacedForm();
    this.showCustomPageInputs = false;
    this.selectPageInput = false;
    this.selectCustomInput = false;
    this.selectPageInputForm.reset();
    this.selectCustomInputForm.reset();
  }

  openSelectPageModal(template: TemplateRef<any>, value: string) {
    this.modalRef = this.modalService.show(template);
  }

  getPlacedoptions() {
    this.selectCustomInput = false;
    this.selectPageInput = false;
    if (
      this.signaturePlacedOptions.controls['placedOption'].value ==
      'customPages'
    ) {
      this.showCustomPageInputs = true;
    } else {
      this.showCustomPageInputs = false;
    }
  }
  // file change method ==========
  exportFinalDocument() {
    const formData = new FormData();
    formData.append('fileId', this.fileDetails.data._id);
    formData.append('fileName', this.fileDetails.data.fileName);
    formData.append('file', this.blob);
    formData.append('fileType', 'document');
    formData.append('isSigned', JSON.stringify(this.isSigned));
    formData.append('originalname', this.fileDetails.data.originalname);
    this.loading = true;
    let subscription = this.userService.saveFile(formData).subscribe({
      next: (res: any) => {
        this.isFileSaving = true;
        this.isEditFileMode = true;
        this.loading = false;
        this.successMessage = res.message;
        this.router.navigate(['/dashboard/saved-documents']);
      },
      error: (err) => {
        this.errorMessage = err.message;
      },
      complete: () => {},
    });
    this.subscriptions.push(subscription);
  }

  closeAlert(event: string) {
    this.successMessage = event;
    this.errorMessage = event;
  }

  selectCustomInputValidation(input: string) {
    this.bothSelectValueSame = false;
    this.fromGreaterThenTo = false;
    this.selectCustomValid = true;
    //if both same
    if (
      this.selectCustomInputForm.controls['selectedCustomPageFrom'].value ===
      this.selectCustomInputForm.controls['selectedCustomPageTo'].value
    ) {
      this.bothSelectValueSame = true;
      this.selectCustomValid = false;
    }
    //'to' should be greter than 'from'
    if (
      this.selectCustomInputForm.controls['selectedCustomPageFrom'].value >
      this.selectCustomInputForm.controls['selectedCustomPageTo'].value
    ) {
      this.fromGreaterThenTo = true;
      this.selectCustomValid = false;
    }
  }

  openDiscardAllChangesDialog(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  discardAllChanges() {
    this.signaturePlaced = false;
    this.signatureImg = null;
    this.inputValue = null;
    this.textPlaced = false;
    this.profileImage = null;
    this.imagePlaced = false;
    this.signatureComponenet.discardAllChanges();
    this.textComponenet.discardAllChanges();
    this.isSignDraggable = true;
    this.isTextDraggable = true;
    this.isImageDraggable = true;
    this.getFileDetails();
    this.modalRef?.hide();
    this.loading = true;
  }

  dragEnded($event: CdkDragEnd<any>) {
    this.offset = { x: 0, y: 0 };
    this.offset = { ...(<any>$event.source._dragRef)._passiveTransform };
    let x = this.initialPosition.x + this.offset.x;
    let y = this.initialPosition.y + this.offset.y;
    let divHeight = document.getElementsByClassName('boundary')[0].clientHeight;
    let divWidth = document.getElementsByClassName('boundary')[0].clientWidth;
    if (divHeight > divWidth) {
      // code for portrait"
      // this.positionX = this.position.x / this.scale - 30;
      // this.positionY = divHeight - (this.position.y - 100) / this.scale + 55;
      this.positionX = x / this.scale + 10;
      this.positionY = divHeight - (y - 100) / this.scale + 50;
    } else {
      // Code for landscape
      this.positionX = x - 10;
      this.positionY = divHeight - (y + 45);
    }
  }

  dragEndedForImage($event: CdkDragEnd<any>) {
    this.offset = { x: 0, y: 0 };
    this.offset = { ...(<any>$event.source._dragRef)._passiveTransform };
    let x = this.initialPosition.x + this.offset.x;
    let y = this.initialPosition.y + this.offset.y;
    let divHeight = document.getElementsByClassName('boundary')[0].clientHeight;
    let divWidth = document.getElementsByClassName('boundary')[0].clientWidth;
    if (divHeight > divWidth) {
      // code for portrait"
      this.positionXxx = x / this.scale + 30;
      this.positionYyy = divHeight - (y - 100) / this.scale + 30;
      } else {
      // Code for landscape
      this.positionXxx = x + 20;
      this.positionYyy = divHeight - (y + 40);
    }
  }

  dragEndedForText($event: CdkDragEnd<any>) {
    this.offset = { x: 0, y: 0 };
    this.offset = { ...(<any>$event.source._dragRef)._passiveTransform };
    let x = this.initialPosition.x + this.offset.x;
    let y = this.initialPosition.y + this.offset.y;
    let divHeight = document.getElementsByClassName('boundary')[0].clientHeight;
    let divWidth = document.getElementsByClassName('boundary')[0].clientWidth;
    if (divHeight > divWidth) {
      this.positionxX = x / this.scale + 70;
      this.positionyY = divHeight - (y - 100) / this.scale + 77;
      // Code for Portrait
      // if (this.signaturePlaced) {
      //   this.positionxX = x / this.scale + 210;
      //   this.positionyY = divHeight - (y - 100) / this.scale + 50;
      // } else {
      //   this.positionxX = x / this.scale + 250;
      //   this.positionyY = divHeight - (y - 100) / this.scale + 77;
      // }
    } else {
      this.positionxX = x + 50;
      this.positionyY = divHeight - (y + 16);
    }
  }

  loadPage(pageIndex: number) {
    this.pageVariable = pageIndex + 1;
  }

  pageRendered(e: any) {
    this.pageWidth = e.source.div.style.width;
    this.scale = e.source.viewport.scale;
  }

  ngOnDestroy() {
    if (!this.isFileSaving && !this.isEditFileMode) {
      const data = {
        fileId: this.fileDetails.data._id,
        fileName: this.fileDetails.data.fileName,
        fileType: 'document',
      };
      this.loading = true;
      let subscription = this.userService.deleteFile(data).subscribe({
        next: (res) => {
        },
        error: (err) => {
        },
      });
      this.subscriptions.push(subscription);
    }
    this.cancelAllSubscriptions();
    localStorage.removeItem('isSigned');
    localStorage.removeItem('uploadedFile');
  }

  getTextValue(textValue: string) {
    this.inputValue = textValue;
    this.inputText = textValue;
    setTimeout(() => {
      this.getTextStyles();
    }, 100);
  }

  getTextElement(textElement: string) {
    this.inputValue = textElement;
  }

  getSignatureImg(signImg: any) {
    this.signatureImg = signImg;
    this.isSignDraggable=true;
   }

  getProfileImage(profileImg: any) {
    this.profileImage = profileImg;
    this.isImageDraggable = true;
  }

  placeSignature(template: TemplateRef<any>, value: string) {
    this.modalRef = this.modalService.show(template, this.config);
    if (value === 'embedsignatureImg') {
      this.placeSignatureImage = true;
      this.placeProfileImage = false;
    }
    if (value === 'embedprofileImage') {
      this.placeSignatureImage = false;
      this.placeProfileImage = true;
    }
    this.isSignature = true;
  }

  placeText(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    this.isSignature = false;
  }

  //Remove embeded pdf signature
  removeEmbedSign() {
    this.signatureImg = null;
    this.signaturePlaced = false;
    this.signatureComponenet.discardAllChanges();
  }

  //Remove embeded pdf text
  removeEmbedText() {
    this.inputValue = null;
    this.textPlaced = true;
    this.textComponenet.discardAllChanges();
  }

  //Remove embeded pdf Image
  removeEmbedImage() {
    this.profileImage = null;
    this.imagePlaced = true;
    this.signatureComponenet.discardAllChanges();
  }

  //Text styles for embeded pdf on text
  async getTextStyles() {
    if (!this.inputText) {
      return;
    }
    let textData = document.getElementById('inputText');
    let dragText: HTMLElement | any = document.getElementById('dragText')!;
    dragText!.style.color = textData?.style.color;
    dragText!.style.fontSize = textData?.style.fontSize;
    dragText!.style.fontWeight = textData?.style.fontWeight;
    dragText!.style.fontStyle = textData?.style.fontStyle;
  }

  //show outer dotted border for drag-box
  showOuterBorder(type: string) {
    if (type === 'signature') {
      let signWrapper: HTMLElement =
        document.getElementById('wrapper-sign-div')!;
      if (signWrapper != undefined) {
        signWrapper.style.border = '1px dashed #35677d';
        document.getElementById('faclone-sign')!.style.visibility = 'visible';
        document.getElementById('faxmark-sign')!.style.visibility = 'visible';
      }
    }
    if (type === 'text') {
      let textWrapper: HTMLElement =
        document.getElementById('wrapper-text-div')!;
      if (textWrapper != undefined) {
        textWrapper.style.border = '1px dashed #35677d';
        document.getElementById('faclone-text')!.style.visibility = 'visible';
        document.getElementById('faxmark-text')!.style.visibility = 'visible';
      }
    }
    if (type == 'image') {
      let imageWrapper: HTMLElement =
        document.getElementById('wrapper-image-div')!;
      if (imageWrapper != undefined) {
        imageWrapper.style.border = '1px dashed #35677d';
        document.getElementById('faclone-image')!.style.visibility = 'visible';
        document.getElementById('faxmark-image')!.style.visibility = 'visible';
      }
    }
  }

  //hide outer dotted border for drag-box
  hideOuterBorder() {
    let signWrapper: HTMLElement = document.getElementById('wrapper-sign-div')!;
    let textWrapper: HTMLElement = document.getElementById('wrapper-text-div')!;
    let imageWrapper: HTMLElement =
      document.getElementById('wrapper-image-div')!;
    if (signWrapper != undefined) {
      signWrapper.style.border = 'hidden';
      document.getElementById('faclone-sign')!.style.visibility = 'hidden';
      document.getElementById('faxmark-sign')!.style.visibility = 'hidden';
    }
    if (textWrapper != undefined) {
      textWrapper.style.border = 'hidden';
      document.getElementById('faclone-text')!.style.visibility = 'hidden';
      document.getElementById('faxmark-text')!.style.visibility = 'hidden';
    }
    if (imageWrapper != undefined) {
      imageWrapper.style.border = 'hidden';
      document.getElementById('faclone-image')!.style.visibility = 'hidden';
      document.getElementById('faxmark-image')!.style.visibility = 'hidden';
    }
  }

  //show inner border for drag-box
  showInnerBorder(type: any) {
    if (type === 'signature') {
      let signBorder: HTMLElement | any =
        document.getElementById('signature-image')!;
      if (signBorder != undefined) {
        signBorder.style.border = '1px solid orange';
      }
    }
    if (type === 'text') {
      let textBorder: HTMLElement | any = document.getElementById('dragText')!;
      if (textBorder != undefined) {
        textBorder.style.border = '1px solid orange';
      }
    }
    if (type === 'image') {
      let imageBorder: HTMLElement | any =
        document.getElementById('upload-image')!;
      if (imageBorder != undefined) {
        imageBorder.style.border = '1px solid orange';
      }
    }
  }

  //hide inner border for drag-box
  hideInnerBorder(type: any) {
    if (type === 'signature') {
      let signBorder: HTMLElement | any =
        document.getElementById('signature-image')!;
      if (signBorder != undefined) {
        signBorder.style.border = 'hidden';
      }
    }
    if (type === 'text') {
      let textBorder: HTMLElement | any = document.getElementById('dragText')!;
      if (textBorder != undefined) {
        textBorder.style.border = 'hidden';
      }
    }
    if (type === 'image') {
      let imageBorder: HTMLElement | any =
        document.getElementById('upload-image')!;
      if (imageBorder != undefined) {
        imageBorder.style.border = 'hidden';
      }
    }
  }

  //add pdf pages on uploaded pdf
  async addPage() {
    this.modalRef?.hide();
    const page = this.pdfDoc.addPage(undefined);
    this.pdfBytes = await this.pdfDoc.save();
    this.bytes = await new Uint8Array(this.pdfBytes);
    this.blob = await new Blob([this.bytes], { type: 'application/pdf' });
    this.url = await URL.createObjectURL(this.blob);
    this.pdfDoc = await PDFDocument.load(this.pdfBytes);
    this.pages = this.pdfDoc.getPages();
    this.modifyPdfPagesComponent.closeModifyPdfPageModal();
  }

  mergePdf() {
    this.isEditFileMode = true;
  }

  cancelAllSubscriptions() {
    this.subscriptions.forEach((subscrition) => {
      subscrition.unsubscribe();
    });
    this.subscriptions = [];
  }
}
