import { render } from '@testing-library/react';

import PtgUiHC3dLine from './line';

describe('PtgUiHC3dLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiHC3dLine />);
    expect(baseElement).toBeTruthy();
  });
});
