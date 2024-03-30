import React, { useEffect, useState } from 'react';

import { deleteLocation, getLocations } from '../../service/api';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
import { PtgUiMaterialTable } from '@ptg-ui/react';
import AddLocation from './AddLocation';

const ViewLocation = () => {
  const [location, setLocation] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getAllLocations();
  }, []);

  const getAllLocations = async () => {
    const response = await getLocations();
    setLocation(response?.data);
  };

  const deleteLocations = async (id: any) => {
    await deleteLocation(id);
    getAllLocations();
  };

  const modalClosed = (event) => {
    setIsOpen(false);
  };

  const locationModal = (
    btnName: string,
    heading: string,
    location?: string
  ) => {
    return (
      <PtgModal
        isOpen={isOpen}
        modal-size="md"
        btn-name={btnName}
        modal-header-name={heading}
        confirm-button-name="Save"
        onModalClose={modalClosed}
        style={{ marginRight: '20px' }}
      >
        <div slot="body-block">
          <AddLocation location={location} btnName={btnName} />
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
      width: '20%',
      render: (location) => (
        <div className="masterdataBtn table-action-button">
          {locationModal('Edit', 'Edit Location', location)}

          <i
            className="fa-solid fa-trash cursor-pointer"
            onClick={() => deleteLocations(location._id)}
          ></i>
          {/* <PtgUiAlert message={('ERROR_MSG')} /> */}
        </div>
      ),
    },
  ];

  return (
    <div className="viewMastertable viewTable">
      {locationModal('Add Location', 'Add Location')}
      <PtgUiMaterialTable
        data={location}
        columns={Columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
      />
    </div>
  );
};

export default ViewLocation;
