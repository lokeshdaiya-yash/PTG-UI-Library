/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using calendar as reusable component.
 * 
*/

import './date.scss';
import { useTranslation } from 'react-i18next';
import DateExampleOne from './dateExampleOne';
import DateExampleTwo from './dateExampleTwo';
import DateExampleThree from './dateExampleThree';
import DateExampleFour from './dateExampleFour';

export interface PtgUiDateExampleProps { }

export function PtgUiDateExample(props: PtgUiDateExampleProps) {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <section>
        <div className="row">
          <div className="col-12 mb-3">
            <h4>{t('CALENDAR_EXAMPLE_1')}</h4>
          </div>
        </div>
        <DateExampleOne />
      </section>
      <hr />
      <section>
        <div className="row">
          <div className="col-12 mb-3">
            <h4>{t('CALENDAR_EXAMPLE_2')}</h4>
          </div>
        </div>
        <DateExampleTwo />
      </section>
      <hr />
      <section>
        <div className="row">
          <div className="col-12 mb-3">
          <h4>{t('CALENDAR_EXAMPLE_3')}</h4>
          </div>
        </div>
        <DateExampleThree />
      </section>
      <hr />
      <section className="pb-5">
        <div className="row">
          <div className="col-12">
          <h4>{t('CALENDAR_EXAMPLE_4')}</h4>
          </div>
        </div>
        <DateExampleFour />
      </section>
    </div>
  );
}

export default PtgUiDateExample;
