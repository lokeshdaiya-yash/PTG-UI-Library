import '../data-table.scss';
import { PtgUiMaterialTable, PtguseFetch } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';


export function PtgUiMaterialTableAccordion() {
  const [gridData, setGridData] = useState([]);
  const [showCode, setShowCode] = useState(false);
  const { data: apiData } = PtguseFetch('table-lists') as any

  useEffect(() => {
    if (apiData[0]) {
      setGridData(apiData[0]?.attributes?.grid)
    }
  }, [apiData])

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    }
    else {
      setShowCode(false);
    }
  };

  const Columns = [
    { title: "Athlete", field: "athlete", width: "20%" },
    { title: "Age", field: "age", filtering: false },
    { title: "Country", field: "country", filtering: false },
    { title: "Year", field: "year", filtering: false },
    { title: "Date", field: "date", filtering: false },
    { title: "Sport", field: "sport", filtering: false },
    { title: "Gold", field: "gold", filtering: false },
    { title: "Silver", field: "silver", filtering: false },
    { title: "Total", field: "total", filtering: false },
  ];

  const componentCode = `
 
import { PtgUiMaterialTable, PtguseFetch } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';

export function PtgUiMaterialTableAccordion() {
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
    const detailForAccordion =(data) =>{
      return(
      <div className='mt-3 mb-3'>
          <h5>Custom Detail Panel</h5>
          <h6>Total: {data?.rowData.total}</h6>
      </div>
      )
  }
}

export default PtgUiMaterialTableAccordion;
    `

  const htmlCode = `
<PtgUiMaterialTable 
data ={gridData}
columns= {Columns}  
filtering= {true}
paging= {true}
paginationPosition={'bottom'}
grouping={true}
detailForAccordion={detailForAccordion}
/>
`
  const detailForAccordion = (data) => {
    return (
      <div className='mt-3 mb-3'>
        <h5>Custom Detail Panel</h5>
        <h6>Total: {data?.rowData.total}</h6>
      </div>
    )
  }

  return (
    <div>
      <div className='row'>
        <div className='col-11'></div>
        <div className='col-1 mr-5 mt-2'>
          <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>
      </div>

      {!showCode ? (
        <div className=" table-responsive">
          <PtgUiMaterialTable
            data={gridData}
            columns={Columns}
            filtering={true}
            paging={true}
            paginationPosition={'bottom'}
            grouping={true}
            detailForAccordion={detailForAccordion}
          />
        </div>
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </div>
  );
}

export default PtgUiMaterialTableAccordion;
