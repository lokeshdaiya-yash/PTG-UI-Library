import { render } from '@testing-library/react';

import RoleBased from './role-based';

describe('RoleBased', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RoleBased />);
    expect(baseElement).toBeTruthy();
  });
});
