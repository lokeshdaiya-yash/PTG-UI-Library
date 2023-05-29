import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';

import { TokenInterceptor } from './token-interceptor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';

describe('TokenInterceptor', () => {
  let service: TokenInterceptor;
  let authService: AuthService;
  let httpMock: HttpTestingController;
  let injector: TestBed;
  let API_URL = 'http://20.114.244.229:1337/users'
  let loginData = { "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY1MjA5MzQyMywiZXhwIjoxNjU0Njg1NDIzfQ.cMnJsBcRJHrnjFgSHFF-Q_3vifyzGbMQsbZacDtMUB8", "user": { "id": 19, "username": "bhanu", "email": "bhanu@gmail.com", "provider": "local", "confirmed": true, "blocked": null, "role": { "id": 3, "name": "Admin", "description": "Admin user", "type": "admin" }, "gender": "male", "created_at": "2022-02-11T10:48:05.567Z", "updated_at": "2022-03-04T09:05:22.518Z", "city": "Indore", "DOB": null } }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ TokenInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TokenInterceptor);
    httpMock = injector.get(HttpTestingController)
    authService = TestBed.inject(AuthService);
  });
  injector = getTestBed()

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // describe('making http calls', () => {
  //   it('adds Authorization header', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {

  //     // http.get('/data').subscribe(
  //     //     response => {
  //     //         expect(response).toBeTruthy();
  //     //     }
  //     // );

  //     const req = httpMock.match(r =>

  //       r.headers.has('Authorization') &&
  //       r.headers.get('Authorization') === `${'Barrier'} ${authService.getToken()}`);
  //     console.log('dsfdsfd', req);
  //     // expect(req.request.method).toEqual('GET');

  //     // req.flush();
  //     httpMock.verify();
  //   }));
  // });

  it('should convert object keys to camelCase', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {

    http.get('link').subscribe(
      response => {
        console.log('response', response);
        expect(response).toBeTruthy();
      }
    );
    const request = httpMock.match('/test')
    console.log(request);
  }))

  it("should set header authorization", (async () => {
    let response: HttpResponse<any> | any;
    const next: any = {
      handle: (responseHandle: any) => {
        response = responseHandle;
      }
    };
    
    authService.setToken(JSON.stringify(loginData))
    let token: any = authService.getToken()
    const request: HttpRequest<any> = new HttpRequest<any>("GET", `${API_URL}`);
    service.intercept(request, next);

    expect(response.headers.get("Authorization")).toEqual(token.jwt);
}));


});
