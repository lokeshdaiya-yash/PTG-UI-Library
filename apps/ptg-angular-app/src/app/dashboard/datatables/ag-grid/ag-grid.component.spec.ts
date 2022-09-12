import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PtgAgGridDatatableComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/datatables/ag-grid-datatable/ptg-ag-grid-datatable/ptg-ag-grid-datatable.component';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridComponent } from './ag-grid.component';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AgGridModule, TranslateModule.forRoot()],
      declarations: [ AgGridComponent, PtgAgGridDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onEditButtonClick called', () =>{
    const event = new Event('click');
    component.onEditButtonClick(event);
  });

  it('should onFilterOpend called', () =>{
    const event = new Event('click');
    component.onFilterOpend(event);
  });
  it('should onFilterChanged called', () =>{
    const event = new Event('click');
    component.onFilterChanged(event);
  });
  it('should onFilterModified called', () =>{
    const event = new Event('click');
    component.onFilterModified(event);
  });
  it('should onEditing called', () =>{
    const event = new Event('click');
    component.onEditing(event);
  });
  it('should paginate called', () =>{
    const event = new Event('click');
    component.paginate(event);
  });
  it('should navigateToNext called', () =>{
    const event = new Event('click');
    component.navigateToNext(event);
  });
  it('should navigateToPrevious called', () =>{
    const event = new Event('click');
    component.navigateToPrevious(event);
  });
  it('should navigateToPage called', () =>{
    const event = new Event('click');
    component.navigateToPage(event);
  });
});
