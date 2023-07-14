import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
