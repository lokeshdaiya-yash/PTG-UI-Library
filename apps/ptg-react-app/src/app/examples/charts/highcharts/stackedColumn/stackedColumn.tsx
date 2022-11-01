import './stackedColumn.scss';
import {PtgUiStackedColumn} from '@ptg-ui/react';
import { highchartStackedColumnData} from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCStackedColumnProps {}

export function PtgUiHCSColumn(props: PtgUiHCStackedColumnProps) {
  return (
    <PtgUiStackedColumn {...highchartStackedColumnData}/>
  );
}

export default PtgUiHCSColumn;
