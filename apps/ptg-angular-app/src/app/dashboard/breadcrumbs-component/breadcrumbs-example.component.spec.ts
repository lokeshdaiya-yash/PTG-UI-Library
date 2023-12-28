import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsExampleComponent } from './breadcrumbs-example.component';

describe('BreadcrumbsExampleComponent', () => {
  let component: BreadcrumbsExampleComponent;
  let fixture: ComponentFixture<BreadcrumbsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), BrowserAnimationsModule],
      declarations: [ BreadcrumbsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
