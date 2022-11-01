import { render } from '@testing-library/react';

import PtgUiHCColumn from './column';

describe('PtgUiHCColumn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiHCColumn />);
    expect(baseElement).toBeTruthy();
  });
});
