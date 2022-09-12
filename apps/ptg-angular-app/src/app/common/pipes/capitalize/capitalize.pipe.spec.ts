import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should display in capitlize', () => {
    const inputValue = 'test';
    const pipe = new CapitalizePipe();
    const result = pipe.transform(inputValue);
    expect(result).toBe('Test');

});
});
