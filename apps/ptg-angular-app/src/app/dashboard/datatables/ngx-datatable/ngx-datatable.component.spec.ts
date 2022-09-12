import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PtgNgxDatatableComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/datatables/ngx-datatable/ptg-ngx-datatable/ptg-ngx-datatable.component';
import { InputComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/input/input/input.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgxDatatableComponent } from './ngx-datatable.component';

describe('NgxDatatableComponent', () => {
  let component: NgxDatatableComponent;
  let fixture: ComponentFixture<NgxDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), NgxDatatableModule],
      declarations: [ NgxDatatableComponent, InputComponent, PtgNgxDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should onSelect called', () =>{
    const event = new Event('click');
    component.onSelect(event);
  });
  it('should getAction called', () =>{
    const event = new Event('click');
    component.getAction(event);
  });
  it('should filter called', () =>{
    const event: Event = <Event><any>{
      target: {
          value: "test"     
      }
    };
    component.updateFilter(event);
    expect(component.offset).toBe(0);
    expect(component.rows).toStrictEqual([]);
  });
});
