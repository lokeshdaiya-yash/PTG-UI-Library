/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Example using multi select checkbox as reusable component.
 */

import './select.scss';
import { PtgUiMultiSelectbox, PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import {useState, useEffect} from 'react';
/* eslint-disable-next-line */
export interface MultiSelectCheckboxProps {}

export function MultiSelectCheckbox(props: MultiSelectCheckboxProps) {
  const [cityList, setCityList]= useState([])
  const { data:apiData } = PtguseFetch('city-lists') as any

  useEffect(() => {
    if(apiData[0]){
      setCityList(apiData[0]?.attributes?.city)
    }
  },[apiData])

  /*-----onSelect method -----*/
  const { t } = useTranslation();
  const onSelect: any = (event: any) => {
    console.log('Select Values,onSelect', event);
  };
  return (
    <>
      <section>
        <div className="row">
          <div className="col-lg-4 mb-3 col-sm-6 col-xs-12">
          <h4>{t('SINGLE_SELECT_TEXT')}</h4>
            {/*-----Usable component PtgUiMultiSelectbox single select-----*/}
            <PtgUiMultiSelectbox
              name="city"
              list={cityList}
              onSelect={onSelect}
              showCheckbox={true}
              singleSelect={true}
              placeholder={t('SELECT_PLACEHOLDER')}/>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="row">
          <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 multi-select">
          <h4>{t('MULTI_SELECT_TEXT')}</h4>
            {/*-----Usable component PtgUiMultiSelectbox multi select-----*/}
            <PtgUiMultiSelectbox
              name="city"
              list={cityList}
              onSelect={onSelect}
              showCheckbox={true}
              singleSelect={false}
              placeholder={t('SELECT_PLACEHOLDER')}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MultiSelectCheckbox;
