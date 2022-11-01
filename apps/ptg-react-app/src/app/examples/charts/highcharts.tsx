/**
 * @since March 2022
 * @author Ankit Patidar
 * @updatedby Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 * 
*/
import PtgUiHCLine from './highcharts/line/line';
import PtgUiHCLineBar from './highcharts/linebar/linebar';
import PtgUiHCSColumn from './highcharts/stackedColumn/stackedColumn';
import { PtgUiColumn, PtgUiPie, PtgUi3dLine, PtgUi3dColumn, PtgUi3dPie } from '@ptg-ui/react';
import { highchartsLineData, highchartsPieData, highchartsColumnData, line3DOptions, column3DOptions, pie3dData } from '@ptg-react-app/mock/mocks';
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface HighchartsProps { }

export function Highcharts(props: HighchartsProps) {
   const { t } = useTranslation();
  return (
    <div className="w-75">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title="2D graphs">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          <PtgUiColumn {...highchartsColumnData} />
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          <PtgUiPie {...highchartsPieData} />
          <PtgUiHCLine {...highchartsLineData} />
          <h4 className="m-3">{t('LINE_BAR_CHART_TEXT')}</h4>
          <PtgUiHCLineBar />
          <h4 className="m-3">{t('STACKED_CHART')}</h4>
          <PtgUiHCSColumn />
        </Tab>
        <Tab eventKey="3d" title="3D Graphs">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          <PtgUi3dColumn {...column3DOptions} />
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          <PtgUi3dPie {...pie3dData} />
          <h4 className="m-3">{t('LINE_CHART_TEXT')}</h4>
          <PtgUi3dLine {...line3DOptions} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Highcharts;
