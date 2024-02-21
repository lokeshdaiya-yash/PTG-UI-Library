/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using calendar as reusable component.
 * 
*/

import './date.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import DateExampleOne from './dateExampleOne';
import DateExampleTwo from './dateExampleTwo';
import DateExampleThree from './dateExampleThree';
import DateExampleFour from './dateExampleFour';
import CodeIcon from '@mui/icons-material/Code';


export interface PtgUiDateExampleProps { 
}

export function PtgUiDateExample(props: PtgUiDateExampleProps) {
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
    <div className="wrapper">
      <section className='card-section bg-white rounded pt-2 pb-1 pr-3'>
        <div className="row">
          <div className="col-11 mb-2 mt-2">
            <h5 className='example-heading'>{t('CALENDAR_EXAMPLE_1')}</h5>
          
          </div>
          <div className='col-1'>
            <CodeIcon onClick={() =>ShowExampleCode()} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
        </div>
        
       
        <DateExampleOne showCodeOne={showCodeOne} />
        
      </section>

      <section className='card-section bg-white rounded pt-2 pb-1 mt-4'>
        <div className="row">
          <div className="col-11 mb-2 mt-2">
            <h5 className='example-heading'>{t('CALENDAR_EXAMPLE_2')}</h5>
          </div>

          <div className='col-1'>
              <CodeIcon onClick={ShowExampleCodeTwo} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
        </div>
        <DateExampleTwo showCodeTwo={showCodeTwo} />
      </section>
  
        <section className='card-section bg-white rounded pt-2 pb-1 mt-4'>
        <div className="row">
          <div className="col-11 mb-2 mt-2">
          <h5 className='example-heading'>{t('CALENDAR_EXAMPLE_3')}</h5>
          </div>

          <div className='col-1'>
              <CodeIcon onClick={ShowExampleCodeThree} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
        </div>
        <DateExampleThree showCodeThree={showCodeThree} />
      </section>

      <section className="card-section pb-5 bg-white rounded pt-2 pb-1 mt-4">
        <div className="row">
          <div className="col-11 mb-2 mt-2">
          <h5 className='example-heading'>{t('CALENDAR_EXAMPLE_4')}</h5>
          </div>

          <div className='col-1'>
              <CodeIcon onClick={ShowExampleCodeFour} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
        </div>
        <DateExampleFour showCodeFour={showCodeFour} />
      </section>
    </div>
  );
}

export default PtgUiDateExample;
