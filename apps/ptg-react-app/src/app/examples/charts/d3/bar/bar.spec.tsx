import { render } from '@testing-library/react';

import PtgUId3Bar from './bar';

describe('PtgUId3Bar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUId3Bar />);
    expect(baseElement).toBeTruthy();
  });
});
