/**
 * @since April 2022
 * @author Harsha Zalawa 
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import './drag-n-drop.scss';
import { Tabs, Tab } from 'react-bootstrap';
import DragExampleOne from './dragExampleOne';
import DragExampleTwo from './dragExampleTwo';
import DragExampleFour from './dragExampleFour';
import DragExampleThree from './dragExampleThree/dragExampleThree';
import { useTranslation } from 'react-i18next';
/* eslint-disable-next-line */
export interface DragNDropProps { }

export function DragNDrop(props: DragNDropProps) {
  const { t } = useTranslation();
  return (
    <div className="w-100">
      <Tabs defaultActiveKey="example1" className="draganddropmain w-100">
        <Tab eventKey="example1" title={t('DRAG_DROP_EX_1')}>
          <h4 className="m-3">{t('DRAG_DROP_EX_1')}</h4>
          <DragExampleOne />
        </Tab>
        <Tab eventKey="example2" title={t('DRAG_DROP_EX_2')}>
          <h4 className="m-3">{t('DRAG_DROP_EX_2')}</h4>
          <DragExampleTwo />
        </Tab>
        <Tab eventKey="example3" title={t('DRAG_DROP_EX_3')}>
          <h4 className="m-3">{t('DRAG_DROP_EX_3')}</h4>
          <DragExampleThree />
        </Tab>
        <Tab eventKey="example4" title={t('DRAG_DROP_EX_4')}>
          <h4 className="m-3">{t('DRAG_DROP_EX_4')}</h4>
          <DragExampleFour />
        </Tab>
      </Tabs>
    </div>
  );
}

export default DragNDrop;
