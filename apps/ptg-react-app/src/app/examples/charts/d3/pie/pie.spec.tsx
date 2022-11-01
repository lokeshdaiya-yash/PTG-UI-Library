import { render } from '@testing-library/react';

import PtgUId3Pie from './pie';

describe('PtgUId3Pie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUId3Pie />);
    expect(baseElement).toBeTruthy();
  });
});
