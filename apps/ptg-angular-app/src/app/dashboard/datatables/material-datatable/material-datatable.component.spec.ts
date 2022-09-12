import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { MatDatatableComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/datatables/mat-datatable/mat-datatable/mat-datatable.component';
import { InputComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/input/input/input.component';

import { MaterialDatatableComponent } from './material-datatable.component';

describe('MaterialDatatableComponent', () => {
  let component: MaterialDatatableComponent;
  let fixture: ComponentFixture<MaterialDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(),MatTableModule,
        MatPaginatorModule,
        MatSortModule,],
      declarations: [ MaterialDatatableComponent, MatDatatableComponent, InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onInit called', () =>{
    component.ngOnInit();
    const data = ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'];
    expect(component.dataColumns).toStrictEqual(data);
  })

  it('should paginate called', () =>{
    const event = new Event('click');
    component.paginate(event);
  });

  it('getValue called',()=>{
    let btnCall = jest.spyOn(component, 'getValue');
    component.getValue();
    expect(btnCall).toHaveBeenCalled();
  })
});
