import { getLastItem } from './utils';

describe('utils', () => {
  it('create an checks', () => {
      let string = "hello"
    const getString = getLastItem(string);
      
    expect(getString).toBeDefined();
  });
});
