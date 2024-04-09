/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Example using multi select checkbox as reusable component.
 */

import './select.scss';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
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
  const [showCode, setShowCode] = useState(false);
  
  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };

  const onSelect: any = (event: any) => {
    console.log('Select Values,onSelect', event);
  };
  const onRemove: any = (event: any) => {
    console.log('Values,onRemove', event);
  };


  const componentCode = `

  export const CITY_LIST = [
    // { value: '', label: 'Select' },
    { value: 'pune', label: 'Pune', name:'city' },
    { value: 'indore', label: 'Indore',name:'city' },
    { value: 'gujarat', label: 'Gujarat',name:'city' },
    { value: 'Karnataka', label: 'Karnataka',name:'city' },
    { value: 'goa', label: 'Goa',name:'city' },
  ];

    import { CITY_LIST } from '../../mock/mocks';
    import { PtgUiMultiSelectbox } from '@ptg-ui/react';
    import CodeIcon from '@mui/icons-material/Code';
    /* eslint-disable-next-line */
    export interface MultiSelectCheckboxProps {}
    
    export function MultiSelectCheckbox(props: MultiSelectCheckboxProps) {
    
      const onSelect: any = (event: any) => {
        console.log('Select Values,onSelect', event);
      };
      const onRemove: any = (event: any) => {
        console.log('  Values,onRemove', event);
      };
     export default MultiSelectCheckbox;`

  const htmlCode = `
  
  // Single Select Box
    <PtgUiMultiSelectbox
      name="city"
      list={CITY_LIST}
      onSelect={onSelect}
      showCheckbox={true}
      singleSelect={true}
      placeholder={t('SELECT_PLACEHOLDER')}
    />

  // Multi Select Box
    <PtgUiMultiSelectbox
      name="city"
      list={CITY_LIST}
      onSelect={onSelect}
      showCheckbox={true}
      singleSelect={false}
      placeholder={t('SELECT_PLACEHOLDER')}
      onRemove={onRemove}
    /> `
  return (
     <section>
      <div className="row">
        <div className="col-11 mb-3">
          <h4>{t('SINGLE_SELECT_TEXT')}</h4>
        </div>
        <div className="col-1">
          <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          
            {/*-----Usable component PtgUiMultiSelectbox single select-----*/}
          </div>
        </div>
        {showCode && <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />}
        <div className="col-lg-4 mb-3 col-sm-6 col-xs-12">
        <PtgUiMultiSelectbox
          name="city"
          list={cityList}
          onSelect={onSelect}
          showCheckbox={true}
          singleSelect={true}
          placeholder={t('SELECT_PLACEHOLDER')}/>
        </div>
      <hr />
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
              onRemove={onRemove}
            />
          </div>
        </div>
      </section>
  );
}

export default MultiSelectCheckbox;
