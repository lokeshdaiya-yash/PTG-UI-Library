/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Indeterminate checkbox example using indeterminate checkbox reusable component
 */

import {useState, useEffect} from 'react'
import  style from './indeterminate-checkbox.module.scss';
import { CHECKBOX_DATA } from '../../mock/mocks';
import { PtgUiIndeterminateCheckbox, PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface IndeterminateCheckboxProps {}
type Data = {
  name:string,
  id:string|number,
  parentId:string|number,
}
export function IndeterminateCheckbox(props: IndeterminateCheckboxProps) {
  const [checkBoxData, setCheckBoxData]= useState<Data[]>([])
  const {data:apiData, isLoading, error} = PtguseFetch('http://localhost:1337/api/checkbox-lists') as any
  const fetchApi = ()=>{
    const data = apiData.map(item=>{
      return{
      id: Number(item.id),
       name:item.attributes.name,
       parentId:Number(item.attributes.parentId)
      }
     })
     setCheckBoxData(data)
    }
    // console.log(checkBoxData, CHECKBOX_DATA)
  useEffect(()=>{
    fetchApi()
  },[apiData])

  const { t } = useTranslation();
  return (
    <section>
      <div className="row">
        <div className="col-12 mb-3">
          <h4>{t('INTERMEDIATE_CHECKBOX_TEXT')}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mb-3">
          <div className={style['checkbox-list']}>
          {/*-----Usable component PtgUiIndeterminateCheckbox for Indeterminate Checkbox-----*/}
          <PtgUiIndeterminateCheckbox items={checkBoxData} />
        </div>
        </div>
      </div>
    </section>
  );
}

export default IndeterminateCheckbox;
