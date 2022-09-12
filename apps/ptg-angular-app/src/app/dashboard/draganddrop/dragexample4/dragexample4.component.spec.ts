import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { Dragexample4Component } from './dragexample4.component';

describe('Dragexample4Component', () => {
  let component: Dragexample4Component;
  let fixture: ComponentFixture<Dragexample4Component>;
  const formBuilder: FormBuilder = new FormBuilder();
  let collectionArray:any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragexample4Component],
      imports: [FormsModule, ReactiveFormsModule, TranslateModule.forRoot()],
      providers: [{ provide: FormBuilder, useValue: formBuilder },]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dragexample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClick method', (async () => {

    const onClickMock = jest.spyOn(component, 'addManual');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    jest.useFakeTimers();
    jest.advanceTimersByTime(0)
    expect(onClickMock).toHaveBeenCalled();
  }));
  it('should delete the Collection from the ID', () => {
    const mockId = '1';
    const obj = component.deleteCollection(mockId);
    expect(obj).not.toEqual('1');
  });
  it('should reset the Collection from the ID', () => {
    const mockId = 0;
    let submitBtn = jest.spyOn(component, 'resetCollection');
    fixture.detectChanges();
    component.resetCollection(mockId);
    let r = collectionArray?.controls[0]?.reset()
    expect(submitBtn).toHaveBeenCalledTimes(1)
  });
  it('drop1 check', ()=>{
    let event: any = {}
    event.container = { data: ['Pick up groceries', 'Go home', 'Get to work', 'Fall asleep'] }
    event.previousIndex = 2
    event.currentIndex = 1
    event.previousContainer = {data:['Pick up groceries', 'Go home', 'Get to work', 'Fall asleep']}
    let submitBtn = jest.spyOn(component, 'drop1');
    fixture.detectChanges();
    component.drop1(event);
    expect(submitBtn).toHaveBeenCalledTimes(1)

  })
});
