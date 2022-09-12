import { ComponentFixture, TestBed, fakeAsync, getTestBed } from '@angular/core/testing';
import { Dragexample2Component } from './dragexample2.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
import { LoadingComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/loading/loading/loading.component';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Dragexample2Component', () => {
  let component: Dragexample2Component;
  let fixture: ComponentFixture<Dragexample2Component>;
  let httpTestingController: HttpTestingController;
  let injector: TestBed;
  let authService:AuthService
const users = [{"id":4,"username":"Rahul","email":"rahul@gmail.com","provider":"local","confirmed":true,"blocked":null,"role":{"id":1,"name":"Authenticated","description":"Default role given to authenticated user.","type":"authenticated"},"gender":"male","created_at":"2021-12-16T06:15:16.334Z","updated_at":"2022-04-06T09:12:19.116Z","city":"pune","DOB":null},{"id":5,"username":"Sachin","email":"sachin@gmail.com","provider":"local","confirmed":true,"blocked":null,"role":{"id":1,"name":"Authenticated","description":"Default role given to authenticated user.","type":"authenticated"},"gender":null,"created_at":"2021-12-16T06:18:26.374Z","updated_at":"2021-12-16T06:18:26.379Z","city":null,"DOB":null}]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dragexample2Component, LoadingComponent ],
      imports:[HttpClientModule, NgxLoadingModule, DragDropModule, TranslateModule.forRoot(),
        HttpClientTestingModule],
      providers: [
        AuthService
      ],
    })
    
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dragexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    authService = TestBed.inject(AuthService);
    httpTestingController = injector.inject(HttpTestingController);
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('Users', (() => {
  //   // expect(component.loading).toBe(true)
  //   const service:any = fixture.debugElement.injector.get(AuthService);
  //  let response =  jest.spyOn(service, 'getUser').mockImplementation((res:any) => {
  //     return of(res).pipe(delay(300));
  //   })
  //   const req = httpTestingController.expectOne('http://20.114.244.229:1337/users');
  //   describe('Dumb test', () => {
  //     it.each(users)('%s === %s should be %s', (a) => {
  //       expect(a.role?.type).toBe('admin');
  //     });
  //   });

  //   req.flush({ 
  //     users, user: {
  //       role:{
  //         type:'admin'
  //       }
  //     }
  //   });
    
  //   expect(component.loading).toBe(true);
  // }));
  it('drop button', fakeAsync(() => {
    let event: any = {}
    event.container = { data: ['Pick up groceries', 'Go home', 'Get to work', 'Fall asleep'] }
    event.previousIndex = 2
    event.currentIndex = 1
    event.previousContainer = {data:['Pick up groceries', 'Go home', 'Get to work', 'Fall asleep']}
    const spyCloseDialog = jest.spyOn(component, 'onDrop');
    fixture.detectChanges();
    component.onDrop(event);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('drop button if case', fakeAsync(() => {
    let event: any = {}
    event.container = 'test'
    event.previousIndex = 2
    event.currentIndex = 1
    event.previousContainer = 'test'
    const spyCloseDialog = jest.spyOn(component, 'onDrop');
    fixture.detectChanges();
    component.onDrop(event);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('getuserMock called',()=>{
    
    let mock = jest.spyOn(component, 'getuserMock')
    component.getuserMock();
    expect(mock).toBeCalled()
  })
});
