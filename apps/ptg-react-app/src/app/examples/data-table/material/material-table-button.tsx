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
import { authClass } from '@ptg-react-app/auth/services/auth.service';
/* eslint-disable-next-line */
export interface PtgUiMaterialTableButtonExampleProps {
}

export function PtgUiMaterialTableButtonExample(props: PtgUiMaterialTableButtonExampleProps) {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);
  const {data:apiData} = PtguseFetch('table-lists') as any

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
  return (
    <div className="table-responsive">
    <MaterialTable
    columns={Columns}
    data={gridData}
    title="Material Table"
    // options={{
    //   exportMenu: [{
    //     label: 'Export PDF',
    //     exportFunc: (cols: any, datas: any) => ExportPdf(cols, datas, 'pdfFileName')
    //   }, {
    //     label: 'Export CSV',
    //     exportFunc: (cols: any, datas: any) => ExportCsv(cols, datas, 'csvFileName')
    //   }],
    //   actionsColumnIndex: -1
    // }}
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
  </div>
  );
}

export default PtgUiMaterialTableButtonExample;
