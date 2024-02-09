/**
 * @since Feb 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for material table
 * @Reference https://material-table.com/#/docs/get-started
 * 
*/
import './material-table.scss';
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from '@material-table/exporters';

/* eslint-disable-next-line */
export interface PtgUiMaterialTableProps {
  data:{ 
    id: number,
    athlete: string,
    age: number,
    country: string,
    year: number,
    date: any,
    sport: string,
    gold: number,
    silver: number,
    bronze: number,
    total: number
  }[],
  columns:{
    title: string,
    field: string,
  }[];
    filtering: boolean,
    paging:boolean,
    paginationPosition?:any
    grouping?:boolean,
    detailForAccordion?: any
}

export function PtgUiMaterialTable({data,columns,filtering,paging,paginationPosition='bottom',grouping,detailForAccordion}: PtgUiMaterialTableProps) {  

  return detailForAccordion?(
    <MaterialTable
      columns={columns}
      data={data}
      title={<div style={{display: 'flex', alignItems:'center'}}>
                <span style={{marginRight:'10px'}}>Material Table With Accordion</span>
            </div>}
      detailPanel={rowData => {
        return (  
          detailForAccordion(rowData)
        )
      }}
      />
      
      )
      :
      (
        <MaterialTable
          columns={columns}
          data={data}
          title="Material Table"
          />
      );
}

export default PtgUiMaterialTable;
