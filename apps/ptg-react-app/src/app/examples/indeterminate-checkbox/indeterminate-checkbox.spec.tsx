import { render, fireEvent} from '@testing-library/react';

import IndeterminateCheckbox from './indeterminate-checkbox';

describe('IndeterminateCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement, container  } = render(<IndeterminateCheckbox />);
    expect(baseElement).toBeTruthy();
    fireEvent.click(container.querySelectorAll('input')[0]);
    fireEvent.click(container.querySelectorAll('input')[1]);
  });
});
