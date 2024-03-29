import React, { useEffect, useState } from 'react';

import { deleteBand, getBands } from '../../service/band-api';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
// import './Band.scss';
import { PtgUiAlert, PtgUiMaterialTable } from '@ptg-ui/react';
// import AddBand from './AddBand';
 import AddBand from '../band/AddBand';

const ViewBand = () => {
    const [band, setBand] = useState([]);

    useEffect(() => {
      getAllBands();
    }, []);
  
    const getAllBands = async () => {
      const response = await getBands();
      setBand(response?.data);
    };
  
    
    const deleteBands = async (id: any) => {
        await deleteBand(id);
        // alert('Do You Want To Delete');
        getAllBands();
    }
    
  
    const bandModal = (btnName: string, heading: string, band?: string) => {
      return (
        <PtgModal
          modal-size="md"
          btn-name={btnName}
          modal-header-name={heading}
          confirm-button-name="Save"
        >
          <div slot="body-block">
            <AddBand band={band} btnName={btnName} />
          </div>
        </PtgModal>
      );
    };
  
    const Columns = [
      { title: 'name', field: 'name', filtering: false, width: '50%' },
      {
        title: 'Action',
        field: 'Action',
        name: 'action',
        header: '',
        width: '50%',
        render: (band) => (
          <div className="masterdataBtn table-action-button">
            {bandModal('Edit', 'Edit Band', band)}
  
            <i
              className="fa-solid fa-trash cursor-pointer"
              onClick={() => deleteBands(band._id)}
            >
                 
            </i>
            {/* <PtgUiAlert message={('ERROR_MSG')} /> */}
          </div>
        ),
      },
    ];
  
    return (
      <div className="viewMastertable viewTable">
        {bandModal('Add Band', 'Add Band')}
        <PtgUiMaterialTable
          data={band}
          columns={Columns}
          filtering={true}
          paging={true}
          paginationPosition={'bottom'}
          grouping={true}
        />
      </div>
    );
  };

export default ViewBand