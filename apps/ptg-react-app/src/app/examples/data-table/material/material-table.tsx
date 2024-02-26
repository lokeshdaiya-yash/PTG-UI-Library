/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import '../data-table.scss';
import { PtgUiMaterialTable, PtguseFetch } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
/* eslint-disable-next-line */
export interface PtgUiMaterialTableExampleProps {
}

export function PtgUiMaterialTableExample(props: PtgUiMaterialTableExampleProps) {
const [gridData, setGridData] = useState([]);
const [showCode, setShowCode] = useState(false);
const { data:apiData } = PtguseFetch('table-lists') as any

useEffect(() => {
  if(apiData[0]){
    setGridData(apiData[0]?.attributes?.grid)
  }
},[apiData])
  
const ShowExampleCode = () => {
  if(!showCode){
    setShowCode(true);
  }
  else{
    setShowCode(false);
  }
};

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

const componentCode = `
 
import { PtgUiMaterialTable } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';

/* eslint-disable-next-line */
export interface PtgUiMaterialTableExampleProps {
}

export function PtgUiMaterialTableExample(props: PtgUiMaterialTableExampleProps) {
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
export default PtgUiMaterialTableExample;`

const htmlCode = `
  <PtgUiMaterialTable 
  data ={gridData}
  columns= {Columns}  
  filtering= {true}
  paging= {true}
  paginationPosition={'bottom'}
  grouping={true}
  />
`
  
  return (
    <div>
    <div className='row'>
    <div className = 'col-11'></div>
    <div className='col-1 mr-5 mt-2'>
      <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
    </div>
    </div>
    
    {!showCode ? (
      <div className=" table-responsive">
      <PtgUiMaterialTable 
        data ={gridData}
        title="Material Table"
        columns= {Columns}  
        filtering= {true}
        paging= {true}
        paginationPosition={'bottom'}
        grouping={true}/>
      </div>
    ): (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    </div>
  );
}

export default PtgUiMaterialTableExample;
