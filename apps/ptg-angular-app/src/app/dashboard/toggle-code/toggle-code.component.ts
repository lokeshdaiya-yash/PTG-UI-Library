import { Component, Input } from '@angular/core';

@Component({
  selector: "ptg-ui-toggle-code",
  templateUrl: './toggle-code.component.html',
  styleUrls: ['./toggle-code.component.scss']
})
export class ToggleCodeComponent {
  @Input() htmlCode = '';
  @Input() tsCode = '';
  @Input() cssCode = '';

  isCollapsed = false;
}
