/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using AG Grid as reusable component.
 * 
*/
import '../data-table.scss';
import { PtgUiAgGrid, PtgUiAccordian } from '@ptg-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import { AggridButton } from './aggrid-button';
import { useTranslation } from 'react-i18next';
import { authClass } from '@ptg-react-app/auth/services/auth.service';

/* eslint-disable-next-line */
export interface PtgUiAgGridExampleProps {}

export function PtgUiAgGridExample(props: PtgUiAgGridExampleProps) {
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    authClass
      .gridData()
      .then((res: any) => {
        setGridData(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);
  const { t } = useTranslation();
  const autoGroupColumnDef = useMemo(() => ({
    field: "athlete", 
    cellRendererParams: {
      checkbox: true
    }
  }), []);
  const [columnDefs, setColumnDefs] = useState([
    { 
      field: "athlete", checkboxSelection: true,
      headerCheckboxSelection: true, 
      floatingFilter: true,
      minWidth: 150 ,
      pinned: 'left',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200
      }},
    { field: "age", minWidth: 50 },
    { field: "country", minWidth: 100 },
    { field: "year", minWidth: 100 },
    { field: "date", minWidth: 100 },
    { field: "sport", minWidth: 150 },
    { field: "gold", minWidth: 50 },
    { field: "silver", minWidth: 50},
    { field: "total", minWidth: 50},
    { field: "Action",cellRenderer: AggridButton,minWidth: 100},
  ]);

  const defaultColDef = {
    sortable: true,
    resizable: true,
    filter: true,
    flex:1,
    editable: false,
  }

  const accordian_array:any = [{
    title: t('AG_GRID_ACCORDION'),
    content:   <PtgUiAgGrid
                  data={gridData}
                  autoGroupColumnDef={autoGroupColumnDef}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  rowSelection="multiple"
                  groupSelectsChildren={true}
                  pagination={true}
                  paginationPageSize={8}
                  customPagination={false}
                />
  }]

  return (
    <> 
      <h4>{t('AG_GRID_DATATABLE')}</h4>
      <PtgUiAgGrid
        data={gridData}
        autoGroupColumnDef={autoGroupColumnDef}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        groupSelectsChildren={true}
        pagination={true}
        paginationPageSize={8}
        customPagination={true}
      />
      <h4>{t('DATATABLE_WITH_ACCORDIAN')}</h4>
      <PtgUiAccordian stories={accordian_array}/>
      </>
  );
}

export default PtgUiAgGridExample;
