import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { CarouselExampleComponent } from './carousel-example.component';

describe('CarouselExampleComponent', () => {
  let component: CarouselExampleComponent;
  let fixture: ComponentFixture<CarouselExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), BrowserAnimationsModule],
      declarations: [ CarouselExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
