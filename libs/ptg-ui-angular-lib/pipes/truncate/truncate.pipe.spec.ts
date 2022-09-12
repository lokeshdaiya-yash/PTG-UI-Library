import { TruncatePipe } from "./truncate.pipe";

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('teststringexample', '10')).toContain('...');
    expect(pipe.transform('test', '10')).toContain('test');
    expect(pipe.transform('teststringexample', null)).toContain('...');
  });
});
