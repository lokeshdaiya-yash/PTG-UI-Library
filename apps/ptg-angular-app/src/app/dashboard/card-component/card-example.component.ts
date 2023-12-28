import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-card-component',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.scss'],
})
export class CardExampleComponent {
  cardDataObj: any = [
    {
      cardId: 1,
      cardTitle: 'card title',
      cardContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      cardId: 2,
      cardTitle: 'Card Title',
      cardContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  htmlCode = `
  <div *ngFor="let card of cardDataObj">
  <ptg-card
    [cardContent]="card.cardContent"
    [cardId]="card.cardId"
    [cardTitle]="card.cardTitle"
    [src]="card.src"
    cardButtonText="select"
    isCardAction="true"
    (handleClick)="handleClick($event)"
  ></ptg-card>
</div>
  `;

  tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'ptg-ui-card-component',
      templateUrl: './card-example.component.html',
      styleUrls: ['./card-example.component.scss']
    })
    export class CardExampleComponent {
      cardDataObj: any = [
        {
          cardId: 1,
          cardTitle: 'card title',
          cardContent:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
          src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          cardId: 2,
          cardTitle: 'Card Title',
          cardContent:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
          src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
      ];
    handleClick() {
      console.log('handle Click called');
    }
  }`;

  handleClick(event) {
    console.log('handle Click called', event.detail);
  }
}
