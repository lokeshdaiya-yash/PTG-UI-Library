/**
 * @since March 2022
 * @author Ankit Patidar
 * @updatedby Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 *
 */
/**
 * @since April 2022
 * @author Ankit patidar
 * @desc Filter Example using filter reusable component
 */

import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Pipes from './pipes';
import PipeEvent from './pipe-events';

/* eslint-disable-next-line */
export interface PipeTabsProps {}

export function PipeTabs(props: PipeTabsProps) {
  const { t } = useTranslation();
  return (
    <div className="w-100">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title={t('PIPE')}>
          {/* <h4 className="m-3"></h4> */}
          <div className="m-3"></div>
          <Pipes />
        </Tab>
        <Tab eventKey="3d" title={t('EVENT')}>
          {/* <h4 className="m-3"></h4> */}
          <div className="m-3"></div>
          <PipeEvent />
        </Tab>
      </Tabs>
    </div>
  );
}

export default PipeTabs;
