import { render } from '@testing-library/react';

import WebComponentsReact from './ptg-ui-web-components-react';

describe('WebComponentsReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponentsReact />);
    expect(baseElement).toBeTruthy();
  });
});
