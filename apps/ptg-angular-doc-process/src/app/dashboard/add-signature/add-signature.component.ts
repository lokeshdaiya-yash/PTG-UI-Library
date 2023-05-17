import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { fabric } from 'fabric';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment';
import {
  faXmark,
  faSignature,
  faImage,
} from '@fortawesome/free-solid-svg-icons';

import { ItemsAddSignature } from '../user/models/file-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ptg-ui-add-signature',
  templateUrl: './add-signature.component.html',
  styleUrls: ['./add-signature.component.scss'],
})
export class AddSignatureComponent implements OnInit {
  subscriptions: Subscription[] = [];
  imageAccessbaseUrl: string = environment.signatureFilePath;
  modalRef?: BsModalRef;
  loading: boolean = false;
  loggedUserId: string;
  signatureImg: string|null;
  errorMessage: string | undefined;
  canvas: any;
  selectedValue: string;
  drawSignature: boolean;
  uploadSignature: boolean;
  ShowUploadSignature: boolean;
  ShowSignatureList: boolean;
  uploadSignatureForm!: FormGroup;
  uplodedSignatureFileName: string | null;
  uplodedFile: string|null;
  profileImage: null;
  showDrawSignature: boolean = true;
  showUploadImage: boolean = false;
  showUploadSignatureImage: boolean = false;
  //fontAwesome
  faXmark = faXmark;
  faSignature = faSignature;
  faImage = faImage;
  // ===========crop image related vars
  processCropper: boolean = false;
  selectedImageToCrop: string;
  showPreview: boolean = false;
  gotCroppedImage: string = '';
  aspectRatio: number = 3 / 2;
  signatureList: any = [];
  base64ImageData: string | ArrayBuffer | null = '';
  items: ItemsAddSignature[] = [
    {
      id: 'drawSiganture',
      name: 'tabradio',
      label: 'Draw Signature',
      value: 'drawsignature',
      default: true,
    },
    {
      id: 'uploadSignature',
      name: 'tabradio',
      label: 'Upload Signature',
      value: 'uploadsignature',
      default: false,
    },
    {
      id: 'selectFromList',
      name: 'tabradio',
      label: 'Select from list',
      value: 'presignatureselect',
      default: false,
    },
  ];
  config = {
    ignoreBackdropClick: true,
  };
  @Output() signImg = new EventEmitter<any>();
  @Output() placeSign = new EventEmitter<any>();
  @Output() profileImg = new EventEmitter<any>();
  @Input() signaturePlacedChild: boolean;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit() {
    let loggedUser: any = localStorage.getItem('userdata');
    this.loggedUserId = JSON.parse(loggedUser).id;
    this.uploadSignatureForm = this.formBuilder.group({
      uploadedFile: [''],
      file: [''],
    });
  }

  async openAddSignatureModal(template: TemplateRef<any>) {
    this.showUploadSignatureImage = true;
    this.modalRef = this.modalService.show(template, this.config);
    setTimeout(() => {
      this.canvas = new fabric.Canvas('canvas', { isDrawingMode: true });
    }, 0);
  }

  openUploadImageModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    this.showUploadImage = true;
  }

  onradioSelect(selectedTab: string) {
    if (this.selectedValue === selectedTab) {
      return;
    }
    this.selectedValue = selectedTab;
    if (this.selectedValue == 'drawsignature') {
      setTimeout(() => {
        this.canvas = new fabric.Canvas('canvas', { isDrawingMode: true });
      }, 0);
      this.showDrawSignature = true;
    } else {
      this.showDrawSignature = false;
    }
    if (this.selectedValue == 'uploadsignature') {
      this.ShowUploadSignature = true;
    } else {
      this.ShowUploadSignature = false;
    }
    if (this.selectedValue == 'presignatureselect') {
      this.getPreSignautures();
      this.ShowSignatureList = true;
    } else {
      this.ShowSignatureList = false;
    }
    this.onChange(this.selectedValue);
    this.onTouched();
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  onBlur() {
    this.onTouched();
  }

  clearSignature() {
    this.selectedValue = 'drawsignature';
    this.showDrawSignature = true;
    this.ShowSignatureList = false;
    this.ShowUploadSignature = false;
    this.canvas?.clear();
    this.uploadSignatureForm.reset();
    this.uplodedFile = null;
    this.uplodedSignatureFileName = null;
    this.processCropper = false;
    this.showPreview = false;
    this.showUploadImage = false;
    this.showUploadSignatureImage = false;
    this.modalRef?.hide();
  }

  saveSignature() {
    let image = this.canvas.toDataURL('image/png', 0.5);
    this.signatureImg = image;
    this.signImg.emit(this.signatureImg);
    this.modalRef?.hide();
    this.clearSignature();
  }

  // uploadFile to crop
  uploadFileToCrop(event: any) {
    this.selectedImageToCrop = event;
    this.processCropper = true;
  }

  uploadSignatureFile() {
    if (!this.uplodedFile) {
      this.toastrService.warning('please choose a file', 'file not chosen', {
        timeOut: 3000,
      });
      return;
    }
    const formData = new FormData();
    formData.append(
      'file',
      this.uploadSignatureForm.get('uploadedFile')?.value
    );
    formData.append('userId', this.loggedUserId);
    formData.append('fileType', 'signature');
    this.loading = true;
    console.log(
      'fom data payload: ',
      formData.get('file'),
      formData.get('userId'),
      formData.get('fileType')
    );
    let subscription = this.userService.uploadSignature(formData).subscribe({
      next: async (res: any) => {
        // For response success
        // console.log('uploaded signautre response: ', res);
        await this.getSignatureImageToPlace(res.data);
        this.signImg.emit(this.base64ImageData);
        this.modalRef?.hide();
        this.loading = false;
        this.toastrService.success(res.msg, 'Success', {
          timeOut: 3000,
        });
        this.uploadSignatureForm.reset();
        // this.response = res;
      },
      error: (err) => {
        // console.log('error', err);
        this.errorMessage = err.error.message || 'Something went wrong';
        this.toastrService.error(this.errorMessage, 'Alert', {
          timeOut: 3000,
        });
      },
      complete: () => {},
    });
    this.subscriptions.push(subscription);
    this.clearSignature();
  }

  placeSignature() {
    this.placeSign.emit();
  }

  discardAllChanges() {
    this.signatureImg = null;
    this.profileImage = null;
  }

  reUploadImageForCropping() {
    this.uploadSignatureForm.reset();
    this.uplodedSignatureFileName = '';
    this.showPreview = false;
    this.gotCroppedImage = '';
  }

  getFinalCroppedImage(imageData: any) {
    if (imageData.croppedImage) {
      this.uplodedFile = imageData;
      this.gotCroppedImage = imageData.croppedImage;
      this.processCropper = false;
      this.showPreview = true;
      const splitUrl = this.gotCroppedImage.split(',');
      this.b64toBlob(splitUrl[1], splitUrl[0]).then((res: any) => {
        this.uploadSignatureForm.get('uploadedFile')?.setValue(res);
      });
    }
  }
  
  async b64toBlob(b64Data: string, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: 'image/png' });
    return blob;
  }

  getPreSignautures() {
    const dataToSend = {
      userId: this.loggedUserId,
      fileType: 'signature',
    };
    let subscription = this.userService.getFileList(dataToSend).subscribe({
      next: (res: any) => {
        this.signatureList = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.subscriptions.push(subscription);
  }

  async getSignatureImageToPlace(signature: any) {
    const base64 = await fetch(this.imageAccessbaseUrl + signature.fileName);
    base64.blob().then((res) => {
      let reader = new FileReader();
      reader.readAsDataURL(res);
      reader.onloadend = () => {
        this.base64ImageData = reader.result;
        // console.log('convertd url: ', this.base64ImageData);
      };
    });
  }

  setToPlaceTheSelectedSignature() {
    this.clearSignature();
    this.signImg.emit(this.base64ImageData);
    this.modalRef?.hide();
  }

  removeSignature(signature: any) {
    const dataToSend = {
      fileId: signature._id,
      fileName: signature.fileName,
      fileType: 'signature',
    };
    let subscription = this.userService.deleteFile(dataToSend).subscribe({
      next: (res: any) => {
        this.getPreSignautures();
      },
      error: (err) => {
        this.toastrService.error('something went wrong ', 'Error');
      },
    });
    this.subscriptions.push(subscription);
  }

  saveImage() {
    this.profileImg.emit(this.gotCroppedImage);
    this.clearSignature();
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
