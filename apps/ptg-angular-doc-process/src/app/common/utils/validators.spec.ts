import { TestBed, tick } from "@angular/core/testing";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { calendarValidator } from "./validators";
import { ConfirmPasswordValidator } from "./validators";


describe('calendarValidator check', () => {
    let formGroup: FormGroup
    let formBuilder:FormBuilder
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [],
            imports: [ ReactiveFormsModule],
            providers:[ { provide: FormBuilder, useValue: formBuilder }]
        })
            .compileComponents();
    });
    it('create an checks', () => {
        let startDate = new Date()
        let endDate = new Date()
        let matchingControlName = "string"
        let control1 = null
        let form : FormGroup | any
        const setSum = jest.fn().mockName("calendarValidator")
        setSum();
        let matchingControl:any = form?.controls[matchingControlName]
        
        control1 = form?.controls['new Date()'];
        let newfn = jest.fn()
        matchingControl?.setErrors({ calendarValidator: true }); 
        matchingControl?.setErrors(null);
        expect(matchingControl?.setErrors).toBeUndefined()
        expect(setSum).toBeCalled()
        
        // expect(getString).toBeDefined();
    });



    it('create an ConfirmPasswordValidator', () => {
       let  control:any = {value:'string'}
       let matchingControl:any = {value:'syr'}
       let cntl = "asc"
       let mat = 'ds'
       let form : FormGroup|any
        const setSum = jest.fn().mockName("ConfirmPasswordValidator")
        setSum();
        const ret = jest.fn().mockReturnValue(form)
        control = form?.controls['sting'];
        matchingControl = form?.controls['sdcsting'];
        expect(setSum).toHaveBeenCalled();
    });
    it('create an ConfirmPasswordValidator non condiiton', () => {
       let  control:any = {value:'string'}
       let matchingControl:any = {value:'syr'}
       let cntl = "asc"
       let mat = 'ds'
       let form :FormGroup | any
        const setSum = jest.fn().mockName("ConfirmPasswordValidator")
        setSum();
        const ret = jest.fn().mockReturnValue(form)
         
        control = form?.controls['sting'];
        matchingControl = form?.controls['sdcsting']
        matchingControl?.setErrors({ confirmPasswordValidator: true });
        expect(setSum).toHaveBeenCalled();
        // expect(ret).toHaveBeenCalled();
    });
});