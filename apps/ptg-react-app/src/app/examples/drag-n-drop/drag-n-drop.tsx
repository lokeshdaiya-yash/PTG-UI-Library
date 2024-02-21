/**
 * @since April 2022
 * @author Harsha Zalawa 
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import './drag-n-drop.scss';
import { useState } from 'react';
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
        <div className="card-section-two bg-white rounded pt-2 pb-1 mt-4">
        <div className="row">
          <div className="col-11 mb-3">
            <h5 className="m-3">{t('DRAG_DROP_EX_1')}</h5>
          </div>
        </div>
          <DragExampleOne />
        </div>
        
        </Tab>

        <Tab eventKey="example2" title={t('DRAG_DROP_EX_2')}>
        <div className="card-section-two bg-white rounded pt-2 pb-1 mt-4 pb-4">
        <div className="row">
          <div className="col-11 mb-3">
            <h5 className="m-3">{t('DRAG_DROP_EX_2')}</h5>
          </div>
        </div>
          <DragExampleTwo />
        </div>
        </Tab>

        <Tab eventKey="example3" title={t('DRAG_DROP_EX_3')}>
        <div className="card-section-two bg-white rounded pt-2 pb-1 mt-4 pb-4">
        <div className="row">
          <div className="col-11 mb-3">
            <h5 className="m-3">{t('DRAG_DROP_EX_3')}</h5>
          </div>
        </div>
          <DragExampleThree />
        </div>

        </Tab>
        <Tab eventKey="example4" title={t('DRAG_DROP_EX_4')}>
        <div className="card-section-two bg-white rounded pt-2 pb-1 mt-4 pb-4">
        <div className="row">
          <div className="col-11 mb-3">
            <h5 className="m-3">{t('DRAG_DROP_EX_4')}</h5>
          </div>
        </div>
          <DragExampleFour />
        </div>
        </Tab>

      </Tabs>
    </div>
  );
}

export default DragNDrop;
