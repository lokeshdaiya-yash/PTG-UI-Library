import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-library-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-comp-angular';
  tablecolumn = [
    {
      header: 'Id',
      key: 'id',
    },
    {
      header: 'Name',
      key: 'name',
    },
    {
      header: 'Username',
      key: 'username',
    },
    {
      header: 'Email',
      key: 'email',
    },
  ];
  data = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
      });
  }
}
