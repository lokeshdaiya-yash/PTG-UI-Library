import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-dialog-component',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
})
export class DialogExampleComponent {
  isOpen: boolean = false;
  isFooterOpen: boolean = false;
  btnName: any = 'Open Modal';

  htmlCode = `
  <ptg-button [text]="btnName" data-testid="openButton" appearance="primary" (click)="openFooterModal()"
  btnIconAlignment='left'>
  <div slot="btnIcon">
    <i class="fas fa-window-maximize"></i>
  </div>
</ptg-button>
<ptg-modal [isOpen]="isFooterOpen" modal-size="lg" confirm-button-name="Okay" :closeOutsideClick="true"
  (modalClose)="modalFooterClosed()" (confirmClose)="confirmFooterClicked()">
  <div slot="body-block">
    <h2>Angular Slot for Body</h2>
  </div>
</ptg-modal>
  `;

  htmlCodeToHideFooter = `
  <ptg-button [text]="btnName" data-testid="openButton" appearance="primary" (click)="openModal()">
  </ptg-button>

<ptg-modal [isOpen]="isOpen" :show-footer="false" btn-name="Hide Footer in Modal" modal-size="md"
  confirm-button-name="Okay" (modalClose)="modalClosed()" (confirmClose)="confirmClicked()">
  <div slot="body-block">
    <h2>In Angular</h2>
  </div>
</ptg-modal>
  `;

  tsCode = `
    // All of the above props are optional and default values are provided
    // You can hide header/footer by using the props options
    // showHeader = false, It will remove the Header from dialog

    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-dialog-component',
      templateUrl: './demo-dialog.component.html'
    })
    export class DemoDialogComponent {
      isFooterOpen: boolean =false;
      btnName: any = "Open Modal";
      // This method to open the dialog with footer
      openFooterModal(){
        this.isFooterOpen =true;
      }
      // This method will be called when we close or cancel the dialog with footer
      modalFooterClosed() {
        this.isFooterOpen =false;
      }
      // This method will be called when we confirm the dialog with footer
      confirmFooterClicked(){
        this.isFooterOpen =false;
      }
    }`;

  tsCodeToHideFooter = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-dialog-component',
      templateUrl: './demo-dialog.component.html'
    })
    export class DemoDialogComponent {
      isOpen:boolean =false;
      btnName: any = "Open Modal";
      // This method will be called when we close or cancel the dialog without footer
      modalClosed() {
        this.isOpen =false;
      }  
      // This method will be called when we confirm the dialog without footer
      confirmClicked(){
        this.isOpen =false;
      }   
      // This method to open the dialog without footer
      openModal(){
        this.isOpen =true;
      }
    }
    `;

  modalClosed() {
    this.isOpen = false;
  }

  confirmClicked() {
    this.isOpen = false;
  }

  openModal() {
    this.isOpen = true;
  }

  openFooterModal() {
    this.isFooterOpen = true;
  }

  modalFooterClosed() {
    this.isFooterOpen = false;
  }

  confirmFooterClicked() {
    this.isFooterOpen = false;
  }
}
