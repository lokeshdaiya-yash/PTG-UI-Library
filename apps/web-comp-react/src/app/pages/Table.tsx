import React, { useState, useEffect } from 'react';
import { PtgTable } from '@ptg-ui/web-components-react';
const Table = () => {
  const [tabledata, setTableData] = useState(null);
  const [loading, setLoading] = useState(true);
  const tableColumn = [
    {
      header: 'userId',
      key: 'userId',
    },
    {
      header: 'id',
      key: 'id',
    },
    {
      header: 'title',
      key: 'title',
      icon: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: 'https://jsonplaceholder.typicode.com/albums',
    },
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((json) => {
        setTableData(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="Table container">
      <h3 className="title-align">Table</h3>
      <div className="row">
        {tabledata !== null && (
          <PtgTable
            tabledata={tabledata}
            sortable={true}
            tablecolumn={tableColumn}
            searchable={true}
            themeColor="primary"
            tableStrip={true}
            customClass="custom-table"
          ></PtgTable>
        )}
      </div>
    </div>
  );
};

export default Table;
