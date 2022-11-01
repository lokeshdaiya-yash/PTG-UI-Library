import { render } from '@testing-library/react';

import PtgUiHCLine from './line';

describe('PtgUiHCLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiHCLine />);
    expect(baseElement).toBeTruthy();
  });
});
