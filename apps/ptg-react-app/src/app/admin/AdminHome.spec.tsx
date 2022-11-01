import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AdminHome from './AdminHome';

describe('Admin page', () => {
  it('should render Admin Page  successfully', () => {
    const { baseElement } = render(<BrowserRouter><AdminHome /></BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
