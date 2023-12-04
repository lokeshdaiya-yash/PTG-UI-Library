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
import CodeIcon from '@mui/icons-material/Code';


/* eslint-disable-next-line */
export interface HighchartsProps { }

export function Highcharts(props: HighchartsProps) {
   const { t } = useTranslation();
  return (
    <div className="w-75">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title="2D graphs">
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          

          <PtgUiColumn {...highchartsColumnData} />
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>

          <PtgUiPie {...highchartsPieData} />
          <PtgUiHCLine {...highchartsLineData} />

          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('LINE_BAR_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>

          <PtgUiHCLineBar />

          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('STACKED_CHART')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>

          <PtgUiHCSColumn />

        </Tab>
        <Tab eventKey="3d" title="3D Graphs">
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>

          <PtgUi3dColumn {...column3DOptions} />
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>

          <PtgUi3dPie {...pie3dData} />
          <div className='row'>
          <div className="col-8 mb-3">
          <h4 className="m-3">{t('LINE_CHART_TEXT')}</h4>
          </div>

          <div className='col-4 mr-5 mt-3'>
          <CodeIcon fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>

          <PtgUi3dLine {...line3DOptions} />
                  </Tab>
      </Tabs>
    </div>
  );
}

export default Highcharts;
