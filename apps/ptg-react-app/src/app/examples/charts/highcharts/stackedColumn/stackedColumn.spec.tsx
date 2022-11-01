import { render } from '@testing-library/react';

import PtgUiHCSColumn from './stackedColumn';

describe('PtgUiHCSColumn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiHCSColumn />);
    expect(baseElement).toBeTruthy();
  });
});
