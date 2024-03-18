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
  data: {
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
  columns: {
    title: string,
    field: string,
  }[];
  filtering: boolean,
  paging: boolean,
  paginationPosition?: any
  grouping?: boolean,
  detailPanel?: (rowData:any) =>any;
}

export function PtgUiMaterialTable(props: PtgUiMaterialTableProps) {

  return (
    <MaterialTable
      {...props}
    />

  )
}

export default PtgUiMaterialTable;
