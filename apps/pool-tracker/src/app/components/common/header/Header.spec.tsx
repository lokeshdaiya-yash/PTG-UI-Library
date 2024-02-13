import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
