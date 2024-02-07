/**
 * @since March 2024
 * @author Pranjal Joshi
 * @Component ptg-ui-progress-bar;
 * @description This component for progress bar
 **/

import { Component } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
//   styleUrls: ['./progress-bar.scss'],
  host: {
    class: 'w-100',
  },
})
export class ProgressBarComponent {

  htmlCode = `
  <ptg-ui-progress-bar width></ptg-ui-progress-bar>
   `
  gradientHtmlCode = `
  <ptg-ui-progress-gradient-bar value="56">
  </ptg-ui-progress-gradient-bar>
  `

  conditionalHtmlCode = `
  <ptg-ui-conditional-progress-bar value="22">
  </ptg-ui-conditional-progress-bar>

  <ptg-ui-conditional-progress-bar value="88">
  </ptg-ui-conditional-progress-bar>

  <ptg-ui-conditional-progress-bar value="100">
  </ptg-ui-conditional-progress-bar>
  `

  dynamicHtmlCode = `
  <ptg-ui-progress-bar-five value="80"></ptg-ui-progress-bar-five>
  `

  circularHtmlCode = `
  <ptg-ui-circular-progress-bar></ptg-ui-circular-progress-bar>
  `

  conditionalCirHtmlCode = `
  <ptg-ui-conditional-circular-progress-bar progress-amount="35">
  </ptg-ui-conditional-circular-progress-bar>
  `

  dynamicCirHtmlCode = `
  <ptg-circular-dynamic-progress-bar>
  </ptg-circular-dynamic-progress-bar>
  `

  tsCode=`
  import { Component } from '@angular/core';

  @Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
  //styleUrls: ['./progress-bar.scss'],
  host: {
    class: 'w-100',
  },
  })
  export class ProgressBarComponent {}`




}

// export class DialogExampleComponent {
//   htmlCode = `
//   <ptg-modal :btn-name="buttonName" :modal-header-name="modalHeaderName" confirm-button-name="Okay"
//   (modalClose)="modalClosed()" (confirmClose)="onConfirmation()">
//     <div slot="body-block">
//       <h2>Angular Slot for Body</h2>
//     </div>
//   </ptg-modal>
//   `;

//   htmlCodeToHideFooter = `
//   <ptg-modal btn-name="Hide Footer in Modal" :show-footer="false" :modal-header-name="modalHeaderName" confirm-button-name="Okay"
//   (modalClose)="modalClosed()" (confirmClose)="onConfirmation()">
//     <div slot="body-block"> // Slot Name should be 'body-block'
//       <h2>In Angular</h2>
//     </div>
//   </ptg-modal>
//   `;

//   tsCode =
//     `
//     // All of the above props are optional and default values are provided
//     // You can hide header/footer by using the props options
//     // showHeader = false, It will remove the Header from dialog

//     import { Component } from '@angular/core';

//     @Component({
//       selector: 'demo-dialog-component',
//       templateUrl: './demo-dialog.component.html'
//     })
//     export class DemoDialogComponent {
//       buttonName = 'Open Modal',
//       modalHeaderName = 'Modal Header',

//       // This method will be called when we close or cancel the dialog
//       modalClosed() {
//         console.log('Modal Closed');
//       }

//       // This method will be called when we click on confirm button of dialog
//       onConfirmation() {
//         console.log('Confirm Button Clicked');
//       }
//     }`

// }
