import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faFileCirclePlus, faFilePen, faImage, faObjectGroup, faSignature
} from '@fortawesome/free-solid-svg-icons';
import { FeaturesModel } from '../user/models/file-model';

@Component({
  selector: 'ptg-ui-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  // Font Awesome
  faSignature = faSignature;
  faObjectGroup = faObjectGroup;
  faImage = faImage;
  faFilePen = faFilePen;
  faFileCirclePlus = faFileCirclePlus;

  constructor(private router: Router) {}
  ngOnInit(): void {}

  features: FeaturesModel[] = [
    {
      icon: this.faSignature,
      name: 'Add Signature',
      description: 'Draw or upload your signature and add it to PDF.',
    },
    {
      icon: this.faFilePen,
      name: 'Add Text',
      description: 'Add text to your PDF with text transformation.',
    },
    {
      icon: this.faImage,
      name: 'Add Image',
      description: 'Add multiple image to pdf.',
    },
    {
      icon: this.faFileCirclePlus,
      name: 'Add Page',
      description: 'Add new pages to Pdf.',
    },
    {
      icon: this.faObjectGroup,
      name: 'Merge Pdf',
      description: 'combine PDFs with the easiest PDF merge availabe.',
    },
  ];

  navigateToUpload() {
    this.router.navigateByUrl('dashboard/upload-document');
  }
}
