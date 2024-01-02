/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import '../data-table.scss';
import { PtgUiMaterialTable, PtguseFetch } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
/* eslint-disable-next-line */
export interface PtgUiMaterialTableExampleProps {
}

export function PtgUiMaterialTableExample(props: PtgUiMaterialTableExampleProps) {
  const [gridData, setGridData] = useState([]);
  const { data:apiData } = PtguseFetch('table-lists') as any

  useEffect(() => {
    if(apiData[0]){
      setGridData(apiData[0]?.attributes?.grid)
    }
  },[apiData])

// useEffect(() => {
//   authClass
//     .gridData()
//     .then((res: any) => {
//       setGridData(res.data);
//     })
//     .catch((err: any) => console.log(err));
// }, []);
  const Columns = [
    { title: "Athlete",field: "athlete" ,width:"20%"},
    { title: "Age",field: "age",filtering: false },
    { title: "Country" ,field: "country",filtering: false},
    { title: "Year",field: "year",filtering: false },
    { title: "Date",field: "date" ,filtering: false},
    { title: "Sport",field: "sport" ,filtering: false},
    { title: "Gold",field: "gold" ,filtering: false},
    { title: "Silver",field: "silver" ,filtering: false},
    { title: "Total",field: "total" ,filtering: false},
  ];
  return (
    <div className=" table-responsive">
      <PtgUiMaterialTable 
        data ={gridData}
        columns= {Columns}  
        filtering= {true}
        paging= {true}
        paginationPosition={'bottom'}
        grouping={true}/>
    </div>
  );
}

export default PtgUiMaterialTableExample;
