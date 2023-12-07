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
import CodeIcon from '@mui/icons-material/Code';
/* eslint-disable-next-line */
export interface DragNDropProps { }

export function DragNDrop(props: DragNDropProps) {
  const { t } = useTranslation();
  
  const [showCodeOne, setShowCodeOne] = useState(false);
  const [showCodeTwo, setShowCodeTwo] = useState(false);
  const [showCodeThree, setShowCodeThree] = useState(false);
  const [showCodeFour, setShowCodeFour] = useState(false);
  
  const ShowExampleCode = () => {
    if(!showCodeOne){
      setShowCodeOne(true);
    }
    else{
      setShowCodeOne(false);
    }
  };

  const ShowExampleCodeTwo = () => {
    if(!showCodeTwo){
      setShowCodeTwo(true)
    }else{
      setShowCodeTwo(false)
    }
  };

  const ShowExampleCodeThree = () => {
    if(!showCodeThree){
      setShowCodeThree(true)
    }else{
      setShowCodeThree(false)
    }
  };

  const ShowExampleCodeFour = () => {
    if(!showCodeFour){
      setShowCodeFour(true)
    }else{
      setShowCodeFour(false)
    }
  };

  return (
    <div className="w-100">
      <Tabs defaultActiveKey="example1" className="draganddropmain w-100">
        <Tab eventKey="example1" title={t('DRAG_DROP_EX_1')}>
        <div className="row">
          <div className="col-11 mb-3">
            <h4 className="m-3">{t('DRAG_DROP_EX_1')}</h4>
          </div>
          <div className='col-1 mr-5 mt-3'>
            <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
        </div>
        <DragExampleOne showCodeOne={showCodeOne}/>
        
        </Tab>
        <Tab eventKey="example2" title={t('DRAG_DROP_EX_2')}>
        <div className="row">
          <div className="col-11 mb-3">
            <h4 className="m-3">{t('DRAG_DROP_EX_2')}</h4>
          </div>
          <div className='col-1 mr-5 mt-3'>
            <CodeIcon onClick={ShowExampleCodeTwo} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
        </div>
          <DragExampleTwo showCodeTwo={showCodeTwo} />
        </Tab>
        <Tab eventKey="example3" title={t('DRAG_DROP_EX_3')}>
        <div className="row">
          <div className="col-11 mb-3">
            <h4 className="m-3">{t('DRAG_DROP_EX_3')}</h4>
          </div>
          <div className='col-1 mr-5 mt-3'>
            <CodeIcon onClick={ShowExampleCodeThree} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
        </div>
          <DragExampleThree showCodeThree={showCodeThree} />
        </Tab>
        <Tab eventKey="example4" title={t('DRAG_DROP_EX_4')}>
        <div className="row">
          <div className="col-11 mb-3">
            <h4 className="m-3">{t('DRAG_DROP_EX_4')}</h4>
          </div>
          <div className='col-1 mr-5 mt-3'>
            <CodeIcon onClick={ShowExampleCodeFour} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
        </div>
          <DragExampleFour showCodeFour={showCodeFour} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default DragNDrop;
