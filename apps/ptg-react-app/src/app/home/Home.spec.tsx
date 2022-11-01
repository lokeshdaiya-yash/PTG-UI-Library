import { render } from '@testing-library/react';

import PtgUiHome from './Home';

describe('PtgUiHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiHome />);
    expect(baseElement).toBeTruthy();
  });
});
