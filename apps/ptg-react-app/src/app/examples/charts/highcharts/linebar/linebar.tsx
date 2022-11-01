//import './line.scss';
import {PtgUiLineBar} from '@ptg-ui/react';
import { highchartsLineBarData} from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCLineBarProps {}

export function PtgUiHCLineBar(props: PtgUiHCLineBarProps) {
  return (
    <>
  <PtgUiLineBar {...highchartsLineBarData} />
    </>
  
  );
}

export default PtgUiHCLineBar;
