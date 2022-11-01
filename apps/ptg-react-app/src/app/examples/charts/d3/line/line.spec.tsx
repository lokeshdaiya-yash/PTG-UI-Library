import { render } from '@testing-library/react';

import PtgUId3Line from './line';

describe('PtgUId3Line', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUId3Line />);
    expect(baseElement).toBeTruthy();
  });
});
