import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'org-mfe-angular-popup-remote-entry',
  template: `
     <!-- Angular bootstrap Modal -->
     <ng-template #mymodal let-modal class="main_modal">
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Notification</h4>
        <button
          type="button"
          class="close"
          aria-label="Close"
          (click)="modal.dismiss('Cross click')"
        >
          <span aria-hidden="true" class="closes">X</span>
        </button>
      </div>
      <!-- Display book name -->
      <div class="modal-body">
        One more item <span class="booktitle">"{{ bookTitle }}"</span> added in your
        cart.
      </div>
      <!-- for closing modal -->
      <div class="modal-footer">
        <button
          type="button"
          class="btn modal_button"
          (click)="modal.close('Save click')"
        >
          Ok
        </button>
      </div>
    </ng-template>
  `,
  styles: [
    `
            /* css for angular modal */
            .modal_button{
                background-color: #0a205c;
                color: white;
            }

            .booktitle{
                font-weight: 600;
            }

            .close{
                background-color: white;
                color: red;
                width: 35px;
                border-radius:8px ;
                margin-right: 5px;
            }
    `
  ]
})
export class RemoteEntryComponent implements OnInit  {

  title = 'angular-popup';
  closeResult!: string;

  @ViewChild('mymodal')
  input!: ElementRef;
  bookTitle: any = '';

  constructor(private modalService: NgbModal) {}
  // Getting data from session strorage
  ngOnInit(): void {
    this.bookTitle = sessionStorage.getItem('reactData');
  }

  ngAfterViewInit() {
    let value = this.input;

    this.open(value);
  }
  // modal open and close  function
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result: any) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
// modal close function 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
