import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../../config';
import {
  base64ToFile,
  Dimensions,
  ImageCroppedEvent,
  ImageCropperComponent,
  ImageTransform,
} from 'ngx-image-cropper';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'ptg-ui-uplaod-image',
  templateUrl: './uplaod-image.component.html',
  styleUrls: ['./uplaod-image.component.scss'],
})
export class UplaodImageComponent implements OnInit {
 /* eslint-disable */
  selectedFile: File;
  endPOints = ENDPOINTS;
  errorMessage: string;
  loading: boolean = false;
  selectedProfileImage: any;
  @Output() profileImg = new EventEmitter<any>();
  //   @Output() placeImage = new EventEmitter<any>();
  constructor(private http: HttpClient, private modalService: BsModalService) {}

  modalRef?: BsModalRef;
  ngOnInit(): void {}
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  async openUploadImageModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  profileImage: any;

  getSelectedImage(profileImg: any) {
    this.profileImage = profileImg;
  }

  onSave() {
    this.selectedProfileImage = this.croppedImage;
    this.profileImg.emit(this.profileImage);
    this.modalRef?.hide();
  }

  onCancel() {
    //  this.imageChangedEvent = null;
    // this.croppedImage= null;
  }
}
