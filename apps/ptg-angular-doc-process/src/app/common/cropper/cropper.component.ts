import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Dimensions,
  ImageCroppedEvent,
  ImageTransform,
} from 'ngx-image-cropper';
import {
  faSearchPlus,
  faSearchMinus,
  faRefresh,
  faSquare,
  faCheck

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ptg-ui-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss'],
})
export class CropperComponent implements OnInit {
  croppedImage: any = '';
  canvasRotation:number = 0;
  rotation:number = 0;
  scale:number = 1;
  showCropper:boolean = false;
  containWithinAspectRatio:boolean= false;
  transform: ImageTransform = {};
  faSearchPlus = faSearchPlus;
  faSearchMinus= faSearchMinus;
  faRefresh = faRefresh;
  faSquare = faSquare;
  faCheck = faCheck;

  @Input() imageToCrop:any;
  @Input() ratio:number;
  @Output() croppedImageEvent = new EventEmitter<any>();
  
  constructor() {}

  ngOnInit(): void {}
 
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  cropTheImage() {
    const imagedata = {
      croppedImage: this.croppedImage,
      isCroppedDone: true
    }
    this.croppedImageEvent.emit(imagedata);
  }

  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady(sourceImageDimensions: Dimensions) {
  }

  loadImageFailed() {
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  zoomIn() {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }
}
