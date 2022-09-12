import { PhoneFormatPipe } from './phone-format.pipe';

describe('PhoneFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display in formated number', () =>{
    const inputValue = '0123456789';
    const pipe = new PhoneFormatPipe();
    const result = pipe.transform(inputValue);
    expect(result).toBe('+1 (012) 345-6789');
  })
});
