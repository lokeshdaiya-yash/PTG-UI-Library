import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptg-ui-infinite-scroll-component',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit{
    items: any =[];
    page  = 1;
    height  = "350px";
    hasData = false;
    showCode= false;

  htmlCode = `
  <ptg-infinite-scroll  [items]="items" [fetchData]="fetchDataFunction" 
                               [height]="height" [hasData]="hasData">
                <ul *ngIf="items && items.length > 0">
                    <li *ngFor="let i of items; let key= index">
                        <span>{{i.id}} &nbsp; </span>{{i.title}}
                    </li>
                </ul>
  </ptg-infinite-scroll>
 `;

  tsCode = `
  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'ptg-ui-infinite-scroll-component',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss'],
  })
  export class InfiniteScrollComponent implements OnInit{
      items: any =[];
      page  = 1;
      height  = "350px";
      hasData = false;
      showCode= false;

      constructor(private httpClient: HttpClient) {}

      ngOnInit(){
        this.fetchDataFunction();
      }
    
       fetchDataFunction= async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=15");
          const data = await response.json();
          if(data && data.length > 0){
                if(data && data.length > 0){
                    this.items = [...this.items, ...data];
                    this.hasData = true;
                    this.page = this.page + 1;
                } else{
                    this.hasData = false;
                }
          } 
          
        } catch (error:any) {
          console.log(error);
        } 
      }
  `;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.fetchDataFunction();
  }

   fetchDataFunction= async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=15`);
      const data = await response.json();
      if(data && data.length > 0){
            if(data && data.length > 0){
                this.items = [...this.items, ...data];
                this.hasData = true;
                this.page = this.page + 1;
            } else{
                this.hasData = false;
            }
      } 
      
    } catch (error:any) {
      console.log(error);
    } 
  }

}
