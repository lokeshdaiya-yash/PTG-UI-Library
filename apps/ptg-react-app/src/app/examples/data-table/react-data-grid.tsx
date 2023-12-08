/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import {useEffect, useState} from 'react';
import './data-table.scss';
import { PtgUiReactDataGrid , PtguseFetch} from '@ptg-ui/react';
import { PtgUiButton } from '@ptg-ui/react';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import { useTranslation } from 'react-i18next';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
/* eslint-disable-next-line */
export interface PtgUiReactDataGridExampleProps {}

export function PtgUiReactDataGridExample(props: PtgUiReactDataGridExampleProps) {
  const { t } = useTranslation();
  /* istanbul ignore next */
  const onClick = (event: any) => {
      alert("Button Clicked")
  }
  const [gridData, setGridData] = useState([]);
  const {data:apiData, isLoading, error} = PtguseFetch('http://localhost:1337/api/table-lists') as any
  const fetchApi = ()=>{
    const data = apiData.map(item=>{
      return{
        id:item.id,
        age: item.attributes.age,
        athlete:item.attributes.athlete,
        country:item.attributes.country,
      date:item.attributes.date,
      gold:item.attributes.gold,
      silver:item.attributes.silver,
      sport:item.attributes.sport,
      total:item.attributes.total,
      year:item.attributes.year,
      }
     })
     setGridData(data)
    }
  useEffect(()=>{
    fetchApi()
  },[apiData])
  // useEffect(() => {
  //   authClass
  //     .gridData()
  //     .then((res: any) => {
  //       setGridData(res.data);
  //     })
  //     .catch((err: any) => console.log(err));
  // }, []);
  const columns = [
    { name: 'athlete', header: 'Athlete', width: 200 },
    { name: 'age', header: 'Age',  width: 100 },
    { name: 'country', header: 'Country',  width: 150},
    { name: 'date', header: 'Date', width: 100},
    { name: 'sport', header: 'Sport',width: 200},
    { name: 'gold', header: 'Gold', width: 100},
    { name: 'silver', header: 'Silver',width: 100},
    { name: 'total', header: 'Total',width: 100 },
    { name: '', header: '', width: 100,
    render: ({})=><PtgUiButton onClick={onClick} className="btn-sm">{t('CLICK_HERE')}</PtgUiButton>
  },
  ]
  const filterValue = [
    { name: 'athlete', operator: 'startsWith', type: 'string', value: '' },
    { name: 'age', operator: 'gte', type: 'number', value: '' },
    { name: 'country', operator: 'startsWith', type: 'string', value: '' },
  ];
  return (
    <div className="w-100">
      <h4>{t('REACT_DATA_GRID')}</h4>
      <PtgUiReactDataGrid
        data={[...gridData]}
        columns={columns}
        filterValue={filterValue}
        minHeight={550}
        idProperty="id"
        pagination={true}
        nativeScroll={false}
        editable={true}
      />
    </div>
  );
}

export default PtgUiReactDataGridExample;
