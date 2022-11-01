import { render } from '@testing-library/react';

import PtgUiHCPie from './pie';

describe('PtgUiHCPie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiHCPie />);
    expect(baseElement).toBeTruthy();
  });
});
