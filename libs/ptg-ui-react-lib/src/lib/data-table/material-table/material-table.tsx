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
    title: string,
    paging:boolean,
    paginationPosition?:any
    grouping?:boolean
}

export function PtgUiMaterialTable({data,columns,title,filtering,paging,paginationPosition='bottom',grouping}: PtgUiMaterialTableProps) {  

  return (
    <MaterialTable
      columns={columns}
      data={data}
      title={title}
      // title="Table"
      // options={{
      //   // defaultOrderByCollection:'',
      //   exportMenu: [{
      //     label: 'Export PDF',
      //     exportFunc: (cols, datas) => ExportPdf(cols, datas, 'pdfFileName')
      //   }, {
      //     label: 'Export CSV',
      //     exportFunc: (cols, datas) => ExportCsv(cols, datas, 'csvFileName')
      //   }],
      //   filtering:filtering,
      //   paging:paging,
      //   paginationPosition:paginationPosition,
      //   grouping: grouping
      // }}
    />
  );
}

export default PtgUiMaterialTable;
