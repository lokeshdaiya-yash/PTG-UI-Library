import { Component } from '@angular/core';

@Component({
  selector: 'ptg-tabs-example',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsExampleComponent {
  htmlCode = `
      <ptg-tabs>
      </ptg-tabs>`;

  tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'ptg-tabs-example',
      templateUrl: './tabs-example.component.html'
    })
    export class TabsExampleComponent {
    ;
    }`;
}
