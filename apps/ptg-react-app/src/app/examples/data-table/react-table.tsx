/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import React, { useEffect, useState } from 'react';
import './data-table.scss';
import { PtgUiReactTable } from '@ptg-ui/react';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import { useTranslation } from 'react-i18next';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
/* eslint-disable-next-line */
export interface PtgUiReactTableExampleProps {}

export function PtgUiReactTableExample(props: PtgUiReactTableExampleProps) {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    authClass
      .gridData()
      .then((res: any) => {setGridData(res.data);console.log(res.data)})
      .catch((err: any) => console.log(err));
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Athlete',
        accessor: 'athlete',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Sport',
        accessor: 'sport',
      },
      {
        Header: 'Gold',
        accessor: 'gold',
      },
      {
        Header: 'Silver',
        accessor: 'silver',
      },
      {
        Header: 'Total',
        accessor: 'total',
      }
    ],
    []);
  return (
    <div className="w-100">
      <h4>{t('REACT_TABLE')}</h4>
      <PtgUiReactTable columns={columns} data={gridData} />
    </div>
  );
}

export default PtgUiReactTableExample;
