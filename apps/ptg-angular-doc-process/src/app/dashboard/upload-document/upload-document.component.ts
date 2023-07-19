
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'ptg-ui-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss'],
})
export class UploadDocumentComponent implements OnInit {
  subscriptions: Subscription[] = [];
  selectedFileBLOB: any;
  pdfSrc: string;
  fileName: string;
  modalRef?: BsModalRef;
  errorMessage!: string | null;
  loading: boolean = false;
  unsubscribe: Subject<any> = new Subject();
  response: any;
  uploadForm: FormGroup;
  loggedUserId: string;
  uplodedFile: string;
  constructor(
    private sanitizer: DomSanitizer,
    private modalService: BsModalService,
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    let loggedUser: any = localStorage.getItem('userdata');
    this.loggedUserId = JSON.parse(loggedUser).id;
    this.uploadForm = this.formBuilder.group({
      file: [''],
    });
    let subscription =this.auth.getIsPasswordChanged().subscribe({
      next: (isChangedPassword) => {
        if (!isChangedPassword) {
          this.router.navigate(['/dashboard/user/reset-password']);
        }
      },
    });
    this.subscriptions.push(subscription);
  }

  // method to convert file input into blob Url
  fileChangeEvent(fileInput: any) {
    this.uplodedFile = fileInput;
    if (fileInput.target.files && fileInput.target.files[0]) {
      const file = fileInput.target.files[0];
      this.uploadForm.get('file')?.setValue(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const blob = new Blob(fileInput.target.files, {
          type: fileInput.target.files[0].type,
        });
        const url = window.URL.createObjectURL(blob);
        this.selectedFileBLOB = this.sanitizer.bypassSecurityTrustUrl(url);
        this.pdfSrc =
          this.selectedFileBLOB.changingThisBreaksApplicationSecurity;
        this.fileName = fileInput.target.files[0].name;
        localStorage.setItem('uploadedFile', this.fileName)        
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  userFileUpload() {
    if (!this.uplodedFile) {
      this.toastrService.warning('please choose a file', 'file not chosen', {
        timeOut: 3000,
      });
      return;
    }
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file')?.value);
    formData.append('userId', this.loggedUserId);
    formData.append('fileType', 'document');
    console.log(formData)
    
    this.loading = true;
    let subscription =this.userService.uploadFiles(formData).subscribe({
      next: (res: any) => {
        // For response success
        
        this.loading = false;
        this.errorMessage = null;
        this.response = res;
        console.log(res);
        // this.userService.sendFileName(this.response.data._id);
        localStorage.setItem('reloadPage', 'true');
        this.router.navigate([
          '/dashboard/embed-signature',
          btoa(this.response.data._id),
        ]);
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Something went wrong';
        this.loading = false;
      },
      complete: () => {},
    });
    this.subscriptions.push(subscription);
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
