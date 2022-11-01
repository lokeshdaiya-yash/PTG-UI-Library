import { render, fireEvent } from '@testing-library/react';
import Highcharts from './material-table-tabs';

describe('DataTable', () => {
  it('should render successfully', () => {
    const { baseElement, container, getByText } = render(<Highcharts />);
    expect(baseElement).toBeTruthy();
  });
});
