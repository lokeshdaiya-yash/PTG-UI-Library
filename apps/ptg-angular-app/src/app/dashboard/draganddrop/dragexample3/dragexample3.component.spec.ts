import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule} from '@angular/cdk/drag-drop';

import { Dragexample3Component } from './dragexample3.component';

describe('Dragexample3Component', () => {
  let component: Dragexample3Component;
  let fixture: ComponentFixture<Dragexample3Component>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragexample3Component],
      imports: [TranslateModule.forRoot(), DragDropModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dragexample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('drop button', fakeAsync(() => {
    let event: any = {}
    event.container = { data: ['Pick up groceries', 'Go home', 'Get to work', 'Fall asleep'] }
    event.previousIndex = 2
    event.currentIndex = 1
    event.previousContainer = {data:['Pick up groceries', 'Go home', 'Get to work', 'Fall asleep']}
    const spyCloseDialog = jest.spyOn(component, 'drop');
    fixture.detectChanges();
    component.drop(event);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('drop button if case', fakeAsync(() => {
    let event: any = {}
    event.container = 'test'
    event.previousIndex = 2
    event.currentIndex = 1
    event.previousContainer = 'test'
    const spyCloseDialog = jest.spyOn(component, 'drop');
    fixture.detectChanges();
    component.drop(event);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
});
