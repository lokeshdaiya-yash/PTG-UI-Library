import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of , tap} from 'rxjs';

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
  <ptg-infinite-scroll  [items]="items" [fetchData]="fetchDataFunction" [setPage]="setPage" 
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
  import { catchError, of , tap} from 'rxjs';

  @Component({
    selector: 'ptg-ui-infinite-scroll-component',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss'],
  })
  export class InfiniteScrollComponent {
  items: any =[];
  page  = 1;
  height  = "350px";
  hasData = false;
  showCode= false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.fetchDataFunction();
  }

  fetchDataFunction(){
    const apiUrl ='https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=15';
    this.httpClient.get(apiUrl).pipe(
       tap((data:any) =>{
            if(data && data.length > 0){
                this.items =data;
                this.hasData = true;
            } else{
                this.hasData = false;
            }
        }),
        catchError((error) =>{
            console.log(error);
            return of();
        })
    ).subscribe();
  }

  setPage = () =>{
    this.page = this.page + 1;
    this.fetchDataFunction();
  }
  `;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.fetchDataFunction();
  }

  fetchDataFunction(){
    const apiUrl =`https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=15`;
    this.httpClient.get(apiUrl).pipe(
       tap((data:any) =>{
            if(data && data.length > 0){
                this.items =data;
                this.hasData = true;
            } else{
                this.hasData = false;
            }
        }),
        catchError((error) =>{
            console.log(error);
            return of();
        })
    ).subscribe();
  }

  setPage = () =>{
    this.page = this.page + 1;
    this.fetchDataFunction();
  }

}
