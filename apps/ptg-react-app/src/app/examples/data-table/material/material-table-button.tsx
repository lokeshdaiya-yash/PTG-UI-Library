/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import '../data-table.scss';
import MaterialTable from "@material-table/core";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { PtgUiButton, PtguseFetch } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface PtgUiMaterialTableButtonExampleProps {
}

export function PtgUiMaterialTableButtonExample(props: PtgUiMaterialTableButtonExampleProps) {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);
  const [showCode, setShowCode] = useState(false);
  
  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };
  const {data:apiData} = PtguseFetch('table-lists') as any

  useEffect(() => {
    if(apiData[0]){
      setGridData(apiData[0]?.attributes?.grid)
    }
  },[apiData])

  const Columns:any = [
    { title: "Athlete",field: "athlete"},
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

import MaterialTable from "@material-table/core";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';

/* eslint-disable-next-line */
export interface PtgUiMaterialTableButtonExampleProps {
}

export function PtgUiMaterialTableButtonExample(props: PtgUiMaterialTableButtonExampleProps) {
  const [gridData, setGridData] = useState([]);
  const {data:apiData, isLoading, error} = PtguseFetch('http://localhost:1337/api/table-lists') as any
  const fetchApi = ()=>{
    const data = apiData.map(item=>{
      return{
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

  const Columns:any = [
    { title: "Athlete",field: "athlete"},
    { title: "Age",field: "age",filtering: false },
    { title: "Country" ,field: "country",filtering: false},
    { title: "Year",field: "year",filtering: false },
    { title: "Date",field: "date" ,filtering: false},
    { title: "Sport",field: "sport" ,filtering: false},
    { title: "Gold",field: "gold" ,filtering: false},
    { title: "Silver",field: "silver" ,filtering: false},
    { title: "Total",field: "total" ,filtering: false},
  ]; 
 export default PtgUiMaterialTableButtonExample;
`

const htmlCode = `
<MaterialTable
columns={Columns}
data={gridData}
actions={[
    {
      icon: () =>  <PtgUiButton
                    className="btn-sm">
                    {t('CLICK_HERE')}
                    </PtgUiButton>,
          tooltip: 'Click Here',
          onClick: (event: any, rowData: any) => {
          console.log(event, rowData);
          alert("Button Clicked");
      }
    }
  ]}
/>
`
  return (
    <div className="table-responsive">
    <div className='row'>
    <div className = 'col-11'></div>
    <div className='col-1 mr-5 mt-2'>
      <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
    </div>
    </div>

    {!showCode ? (
       <MaterialTable
       columns={Columns}
       data={gridData}
       title="Material Table"
       actions={[
           {
             icon: () =>  <PtgUiButton
                           className="btn-sm">
                           {t('CLICK_HERE')}
                           </PtgUiButton>,
                 tooltip: 'Click Here',
                 onClick: (event: any, rowData: any) => {
                 console.log(event, rowData);
                 alert("Button Clicked");
             }
           }
         ]}
       />
    ):(
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
  </div>
  );
}

export default PtgUiMaterialTableButtonExample;
