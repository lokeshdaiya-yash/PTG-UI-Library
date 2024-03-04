import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.scss'],
})
export class CarouselExampleComponent {
  isLoaded=true;
  htmlCode = `
      <ptg-ui-carousel
        [images]="sampleImages">
      </ptg-ui-carousel>`;

  htmlCodeWithIndicators = `
      <ptg-ui-carousel
        [images]="sampleImages"
        :show-indicators="false"
        imgWidth="400"
        imgHeight="300">
      </ptg-ui-carousel>`;

  tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-carousel-component',
      templateUrl: './demo-carousel.component.html'
    })
    export class DemoCarouselComponent {
      sampleImages = ['https://picsum.photos/id/328/3264/2448', 'https://picsum.photos/id/84/1280/848'];
    }`;
  sampleImages = [
    'https://picsum.photos/id/328/3264/2448',
    'https://picsum.photos/id/431/5000/3334',
    'https://picsum.photos/id/5/5000/3334',
  ];
}
