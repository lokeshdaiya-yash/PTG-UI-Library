import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ButtonRendererComponent } from '../../common/renderer/button-renderer/button-renderer.component';
import { UserService } from '../../services/user.service';
import * as moment from 'moment';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
@Component({
  selector: 'ptg-ui-saved-documents',
  templateUrl: './saved-documents.component.html',
  styleUrls: ['./saved-documents.component.scss'],
})
export class SavedDocumentsComponent implements OnInit {
/* eslint-disable */
  subscriptions: Subscription[] = [];
  frameworkComponents: any;
  loading: boolean = false;
  private gridApi!: GridApi;
  loggedUserId: string;
  fileList: any = [];
  filePath: string = environment.fileAccessPath;
  errorMessage: string | null;
  successMessage: string | null;
  rowData: any = [];
  dataToSetOnRow: any = [];

  public defaultColDef: ColDef = {
    initialWidth: 300,
    sortable: true,
    resizable: true,
  };
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    };
  }

  buttonsDef = {
    buttonsValues: [
      {
        onClick: this.perFormAction.bind(this),
        label: 'Edit',
        icon: '../../../assets/pen-solid.svg',
        filedata: 'filedata',
      },
      {
        onClick: this.perFormAction.bind(this),
        label: 'download',
        icon: '../../../assets/download-solid.svg',
        filedata: 'filedata',
      },
      {
        onClick: this.perFormAction.bind(this),
        label: 'delete',
        icon: '../../../assets/trash-solid.svg',
        filedata: 'filedata',
      },
    ],
  };

  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      resizable: true,
      // width: 300,
      flex: 3,
    },
    {
      headerName: 'Size',
      field: 'size',
      resizable: true,
      // width: 110,
      flex: 1,
    },
    {
      headerName: 'Signed',
      field: 'isSigned',
      resizable: true,
      // width: 110,
      flex: 1,
    },
    {
      headerName: 'Updated',
      field: 'updated',
      resizable: true,
      // width: 250,
      flex: 2,
      getQuickFilterText: (params) => {
        return params.value.name;
      },
    },
    {
      headerName: 'Actions',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: this.buttonsDef,
      resizable: true,
      // width: 352,
      flex: 2,
    },
  ];

  ngOnInit(): void {
    let loggedUser: any = localStorage.getItem('userdata');
    this.loggedUserId = JSON.parse(loggedUser).id;
    let subscription = this.auth.getIsPasswordChanged().subscribe({
      next: (isChangedPassword) => {
        if (!isChangedPassword) {
          this.router.navigate(['/dashboard/user/reset-password']);
        }
      },
    });
    this.subscriptions.push(subscription);
    this.getFiles();
  }
  getFiles() {
    const dataToSend = {
      userId: this.loggedUserId,
      fileType: 'document',
    };
    let subscription = this.userService.getFileList(dataToSend).subscribe({
      next: (res: any) => {
        this.dataToSetOnRow = [];
        this.fileList = res.data;
        this.fileList.forEach((ele: any) => {
          this.dataToSetOnRow.push({
            name: ele.originalname,
            size: this.convertOnProperUnit(ele.size),
            isSigned: ele.isSigned,
            updated: moment(ele.updatedAt).format('MMM DD YYYY, h:mm a'),
            fileName: ele.fileName,
            destination: ele.destination,
            filePath: ele.path,
            id: ele._id,
          });
          this.buttonsDef.buttonsValues.push();
        });
        this.gridApi.setRowData(this.dataToSetOnRow);
      },
      error: (err) => {
      },
      complete: () => {},
    });
    this.subscriptions.push(subscription);
  }

  convertOnProperUnit(size: number) {
    let fSExt = new Array('Bytes', 'KB', 'MB', 'GB'),
      i = 0;
    while (size > 900) {
      size /= 1024;
      i++;
    }
    var exactSize = Math.round(size * 100) / 100 + ' ' + fSExt[i];
    return exactSize;
  }

  perFormAction(event: any) {
    if (event) {
      if (event.label.toLowerCase() === 'edit') {
        this.editFile(event.rowData);
      }
      if (event.label.toLowerCase() === 'delete') {
        this.deleteFile(event.rowData);
      }
      if (event.label.toLowerCase() === 'download') {
        this.downloadFile(event.rowData);
      }
    }
  }

  editFile(fileData: any) {
    const data = {
      fileId: fileData.id,
    };
    this.loading = true;
    this.router.navigate(['/dashboard/embed-signature', btoa(fileData.id)], {
      relativeTo: this.activatedRoute,
      queryParams: { isEditFileMode: true },
      queryParamsHandling: 'merge',
    });
  }

  deleteFile(fileData: any) {
    const data = {
      fileId: fileData.id,
      fileName: fileData.fileName,
      fileType: 'document'
    }
    this.loading = true;
    let subscription = this.userService.deleteFile(data).subscribe({
      next: (res) => {
        this.getFiles();
        this.loading = false;
        this.successMessage = 'File deleted succesfully';
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.message || 'Something went wrong';
      },
    });
    this.subscriptions.push(subscription);
  }

  downloadFile(fileData: any) {
    const a = document.createElement('a');
    a.href = this.filePath + fileData.fileName;
    a.download = this.filePath + fileData.fileName;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('SearchBox') as HTMLInputElement).value
    );
  }
  
  closeAlert(event: string) {
    this.successMessage = event;
    this.errorMessage = event;
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
