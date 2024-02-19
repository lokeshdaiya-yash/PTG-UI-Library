import '../data-table.scss';
import { PtgUiMaterialTable, PtguseFetch } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

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
    const detailForAccordion = (data) => {
      return (
        <div className='ms-4 me-4 mt-2 mb-2'>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell>Calories</TableCell>
              <TableCell>Fat (g)</TableCell>
              <TableCell>Carbs (g)</TableCell>
              <TableCell >Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell >{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
      <div className='ms-4 me-4 mt-2 mb-2'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Fat (g)</TableCell>
                <TableCell>Carbs (g)</TableCell>
                <TableCell >Protein (g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell >{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
            detailPanel ={ rowData => {return (detailForAccordion(rowData))}}
          />
        </div>
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </div>
  );
}

export default PtgUiMaterialTableAccordion;
