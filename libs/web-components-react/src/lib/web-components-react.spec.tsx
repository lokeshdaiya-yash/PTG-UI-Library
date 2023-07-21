import { render } from '@testing-library/react';

import WebComponentsReact from './web-components-react';

describe('WebComponentsReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponentsReact />);
    expect(baseElement).toBeTruthy();
  });
});
