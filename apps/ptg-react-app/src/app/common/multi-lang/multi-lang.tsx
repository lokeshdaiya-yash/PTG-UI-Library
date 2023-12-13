
import { PtgUiMultiSelectbox, PtgUiSelect, PtguseFetch } from '@ptg-ui/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Lang_LIST } from '../../mock/mocks';
import './multi-lang.scss';

export interface MultiLangProps {}
export function MultiLang({}: MultiLangProps) {
  const {data:apiData, isLoading, error} = PtguseFetch('http://localhost:1337/api/lang-lists') as any
  const [languages, setLanguages] = useState([])
  const fetchApi = ()=>{
    const data = apiData?.map(item=>{
      return{
      value: item.attributes.value,
      name:item.attributes.name,
      label:item.attributes.label
      }
     })
     setLanguages(data)
    }
  useEffect(()=>{
    fetchApi()
  },[apiData])
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('en');
 
  const changeLanguage = (event:any) => {
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }
 
  return (
    <div className="form-group me-2">
      <label htmlFor="multiLang" tabIndex={0} aria-label="multi" hidden>Select Lang</label>
      <PtgUiSelect
        name="multiLang"
        list={languages}
        id="multiLang"
        data-testid="lang"
        // className={`sel-placeholder w-100`}
        className="sel-placeholder w-100"
        onChange={changeLanguage}
        value={selectedLang}
        aria-label="multiLang"
      />
  </div>
  );
}
 
export default MultiLang;
