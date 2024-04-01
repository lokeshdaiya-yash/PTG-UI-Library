import React, { useEffect, useState } from 'react';

import { deleteBand, getBands } from '../../service/api';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
// import './Band.scss';
import { PtgUiAlert, PtgUiMaterialTable } from '@ptg-ui/react';
 import AddBand from './AddBand';
// import AddBand from '../band/AddBand';

const ViewBand = () => {
  const [band, setBand] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [bandToEdit, setBandToEdit] = useState(false);


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
  };

  const modalClose = () => {
    setIsOpen(false);
  };

  const confirmClicked = () => {
    setIsOpen(false);
  };

  const openModal = (band) => {
    setBandToEdit(band)
    setIsOpen(true);
  };

  const handleCallback = (val) => {
    console.log('handleclicked', val);
    setIsOpen(val);
  };

  const bandModal = (btnName: string, heading: string, band?: string) => {
    return (
      <>
        <i
          className="fa-solid fa-pencil cursor-pointer"
          onClick={()=>openModal(band)}
        ></i>
        {/* <PtgModal
        isOpen={isOpen}
          modal-size="md"
          modal-header-name={heading}
          confirm-button-name="Save"
          onModalClose={modalClose}
          onConfirmClose={confirmClicked}
        >
          <div slot="body-block">
            <AddBand band={band} btnName={btnName} />
          </div>
        </PtgModal> */}

        <PtgModal
          isOpen={isOpen}
          onConfirmClose={confirmClicked}
          modal-size="lg"
          modal-header-name={heading}
          confirm-button-name={btnName}
          onModalClose={modalClose}
        >
          <div slot="body-block">
            <AddBand
              band={band}
              btnName={btnName}
              parentCallback={handleCallback}
            />
          </div>
        </PtgModal>
      </>
    );
  };

  const Columns = [
    { title: 'id', field: '_id', filtering: false, width: '50%' },
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
          ></i>
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

export default ViewBand;
