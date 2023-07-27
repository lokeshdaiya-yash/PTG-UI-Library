import { Component, OnInit } from '@angular/core';
import { useState, useEffect } from 'react';
@Component({
  selector: 'ptg-ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  title = 'web-comp-angular';
  sorttable = [];

  searchable = [];
  tableStrip=[]

  tablecolumn = [
    {
      header: 'userId',
      key: 'userId',
    },
    {
      header: 'id',
      key: 'id',
    },
    {
      header: 'title',
      key: 'title',
    },
  ];
  data = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
      });
  }
}
