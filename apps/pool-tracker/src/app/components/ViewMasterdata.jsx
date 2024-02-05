import React, { useState, useEffect } from 'react';

import { getMasterdata, deleteMasterdata } from '../service/api';
import '../app.module.scss';
import { PtgUiMaterialTable, PtgUiButton } from '@ptg-ui/react';
import { Link } from 'react-router-dom';
import { PtgCard, PtgModal } from '@ptg-ui/ptg-ui-web-components-react';

const ViewMasterdata = () => {
  const [masterdatas, setMasterdata] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getMasterdata();
    setMasterdata(response.data);
  };

  const deleteUsersDetails = async (id) => {
    console.log(id);
    await deleteMasterdata(id);
    alert('Do You Want To Delete');
    getAllUsers();
  };

  // ======================card========================================
  const cardDataObj = [
    {
      cardId: 1,
      cardTitle: 'card title',
      cardContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      cardId: 2,
      cardTitle: 'Card Title',
      cardContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  const handleClick = (data) => {
    console.log(data.detail);
  };
  // =========================Modal==================

  const modalClosed = (event) => {
    console.log('Modal Closed successfully', event.returnValue);
  };

  // ================Accordion========================================
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const Columns = [
    {
      title: '',
      field: 'name',
      filtering: false,
      width: '2%',
      render: (_, rowData, index) => (
        <div className="accordion-container">
          <button
            className={`accordion ${activeAccordion === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {/* Section {index + 1} */}
          </button>
          <div className={`panel ${activeAccordion === index ? 'active' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      ),
    },
    { title: 'name', field: 'name', filtering: false, width: '20%' },
    { title: 'clientInterviews', field: 'clientInterviews', filtering: false },
    { title: 'poolStartDate', field: 'poolStartDate' },
    // { title: 'poolEndDate', field: 'poolEndDate', filtering: false },
    // { title: 'ageing', field: 'ageing', filtering: false },
    { title: 'status', field: 'status', filtering: false },
    { title: 'skills', field: 'skills', filtering: false },
    { title: 'yearsofExp', field: 'yearsofExp', filtering: false },
    // { title: 'bands', field: 'bands', filtering: false },
    {
      title: 'comments',
      field: 'comments',
      filtering: false,
    },
    // { title: 'clientName', field: 'clientName', filtering: false },
    {
      title: 'Action',
      field: 'Action',
      name: 'action',
      header: '',
      width: 100,
      render: (masterdata) => (
        <div className="masterdataBtn">
          <PtgUiButton onClick={() => deleteUsersDetails(masterdata._id)}>
            Delete
          </PtgUiButton>

          <Link to={`/editMasterdata/${masterdata._id}`}>
            <PtgUiButton component={Link}>Edit</PtgUiButton>
          </Link>

          <PtgModal
            modal-size="lg"
            modal-header-name="Header Name Here"
            confirm-button-name="Okay"
            onModalClose={modalClosed}
          >
            <div slot="body-block">
              <h2>React Slot for Body</h2>
            </div>
          </PtgModal>
        </div>
      ),
    },
  ];

  const filterValue = [
    { name: 'name', operator: 'name', type: 'string', value: '' },
    { name: 'skills', operator: 'skills', type: 'string', value: '' },
    { name: 'clientName', operator: 'clientName', type: 'string', value: '' },
  ];

  return (
    <div className="viewMastertable">
      <PtgUiMaterialTable
        data={masterdatas}
        columns={Columns}
        filtering={true}
        paging={true}
        paginationPosition={'bottom'}
        grouping={true}
        filterValue={filterValue}
      />

      {cardDataObj.map((masterdata) => {
        return (
          <div className="col-md-4">
            <PtgCard
              {...masterdata}
              cardButtonText="select"
              isCardAction={true}
              onHandleClick={getAllUsers}
            />
          </div>
        );
      })}
     
      <div className="">
        <button class="accordion">Section 1</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
};

export default ViewMasterdata;
