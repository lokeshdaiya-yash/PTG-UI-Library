import { render} from '@testing-library/react';
import {Highcharts} from "./highcharts"


//test case for HighChart
describe('Highcharts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Highcharts/>);
    expect(baseElement).toBeTruthy();
  });
});


