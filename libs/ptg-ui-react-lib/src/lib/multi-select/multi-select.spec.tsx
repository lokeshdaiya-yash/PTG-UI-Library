import { render } from '@testing-library/react';

import PtgUiMultiSelectbox from './multi-select';

describe('MultiSelectCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiMultiSelectbox />);
    expect(baseElement).toBeTruthy();
  });
});
