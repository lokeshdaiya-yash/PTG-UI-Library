import { render, fireEvent } from '@testing-library/react';
import PtgUiMaterialTableExample from './material-table';

describe('DataTable', () => {
  it('should render successfully', () => {
    const { baseElement, container, getByText } = render(
      <PtgUiMaterialTableExample />
    );
    expect(baseElement).toBeTruthy();
    fireEvent.click(container.querySelectorAll('.MuiButtonBase-root')[1]);
    fireEvent.click(getByText('Export PDF'));
    fireEvent.click(container.querySelectorAll('.MuiButtonBase-root')[1]);
    fireEvent.click(getByText('Export CSV'));
  });
});
