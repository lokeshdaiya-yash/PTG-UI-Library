import { TestBed } from '@angular/core/testing';

import { PTGToastsService } from './toasts.service';
import { ToastrModule } from 'ngx-toastr';

describe('ToastsService', () => {
  let service: PTGToastsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        
        ToastrModule.forRoot(),
      
      ],
      declarations: [],
      providers:[
        PTGToastsService,

      ]
    }).compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PTGToastsService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
