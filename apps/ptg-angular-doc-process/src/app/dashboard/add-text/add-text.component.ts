import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  faCoffee,
  faItalic,
  faBold,
  faUnderline,
  faPalette,
  faFilePen,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'ptg-ui-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.scss'],
})
export class AddTextComponent implements OnInit {
  inputValue: string | null;
  inputText: string | null;
  modalRef?: BsModalRef;
  elementFontStyle: string;
  elementFontWeight: string;
  //font awesome
  faCoffee = faCoffee;
  faItalic = faItalic;
  faBold = faBold;
  faUnderline = faUnderline;
  faPalette = faPalette;
  faFilePen = faFilePen;
  @Output() textValue = new EventEmitter<any>();
  @Output() placeText = new EventEmitter<any>();

  constructor(private modalService: BsModalService) {}
  config = {
    ignoreBackdropClick: true,
  };

  ngOnInit(): void {}

  openAddTextModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  clearAddedText() {
    this.inputText = null;
    this.modalRef?.hide();
  }

  saveAddedText() {
    this.inputValue = this.inputText;
    setTimeout(this.getStyles, 10);
    this.modalRef?.hide();
    this.textValue.emit(this.inputValue);
  }

  //text transformation
  getColor(color: HTMLElement|any) {
    let target = document.getElementById('addText')!;
    target.style.color = color.value;
  }

  changeToBold() {
    let target = document.getElementById('addText')!;
    if (target.style.fontWeight == 'bolder') {
      this.elementFontWeight = target.style.fontWeight = 'normal';
    } else {
      this.elementFontWeight = target.style.fontWeight = 'bolder';
    }
  }

  changeToItalic() {
    let target = document.getElementById('addText')!;
    if (target.style.fontStyle == 'italic') {
      this.elementFontStyle = target.style.fontStyle = 'normal';
    } else {
      this.elementFontStyle = target.style.fontStyle = 'italic';
    }
  }

  changeFontSize() {
    let fontSizeDD: HTMLElement|any = document.getElementById('fontSizeDD');
    let txtBox:HTMLElement|any = document.getElementById('addText');
    let value = fontSizeDD.value;
    txtBox!.style.fontSize = value + 'px';
  }

  async getStyles() {
    let addText = await document.getElementById('addText')!;
    document.getElementById('inputText')!.style.fontSize =
      addText.style.fontSize;
    document.getElementById('inputText')!.style.color = addText.style.color;
    document.getElementById('inputText')!.style.fontWeight =
      addText.style.fontWeight;
    document.getElementById('inputText')!.style.fontStyle =
      addText.style.fontStyle;
  }

  discardAllChanges() {
    this.inputText = null;
    this.inputValue = null;
  }
}
