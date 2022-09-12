import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ SidenavComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should toggle called', () =>{
    component.toggle();
    expect(component.hidden).toBe(false);
  })

  it('Should open called', () =>{
    component.open();
    expect(component.hidden).toBe(false);
  })

  it('Should close called', () =>{
    component.close();
    expect(component.hidden).toBe(true);
  })

  it('Should called navigate', () =>{
    const menuItem = {
      label: 'lable',
      path: '',
      icon: 'icon',
      disabled: false,
      pages: []
    }
    component.navigate(menuItem);
    // menuItem && menuItem.
    expect(menuItem).toBeTruthy();
    expect(menuItem.disabled).toBe(false);
    expect(component.selectedPath).toBe(menuItem.path);
  })
});
