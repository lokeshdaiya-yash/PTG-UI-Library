import React, { useEffect, useState } from 'react';

import { deleteCompetency, getCompetency } from '../../service/competency-api';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
// import './Band.scss';
import { PtgUiAlert, PtgUiMaterialTable } from '@ptg-ui/react';
import AddCompetency from '../competency/AddCompetency';
// import AddCompetency from './AddCompetency';

const ViewCompetency = () => {
    const [competency, setCompetency] = useState([]);

    useEffect(() => {
      getAllCompetency();
    }, []);
  
    const getAllCompetency = async () => {
      const response = await getCompetency();
      setCompetency(response?.data);
    };
  
    
    const deleteCompetencies = async (id: any) => {
        await deleteCompetency(id);
        // alert('Do You Want To Delete');
        getAllCompetency();
    }
    
  
    const competencyModal = (btnName: string, heading: string, competency?: string) => {
      return (
        <PtgModal
          modal-size="md"
          btn-name={btnName}
          modal-header-name={heading}
          confirm-button-name="Save"
          style={{ marginRight: '20px' }}
        >
          <div slot="body-block">
            <AddCompetency competency={competency} btnName={btnName} />
          </div>
        </PtgModal>
      );
    };
  
    const Columns = [
      { title: 'name', field: 'name', filtering: false, width: '90%' },
      {
        title: 'Action',
        field: 'Action',
        name: 'action',
        header: '',
        width: '10%',
        render: (competency) => (
          <div className="masterdataBtn table-action-button">
            {/* {competencyModal('Edit', 'Edit Competency', competency)} */}
  
            <i
              className="fa-solid fa-trash cursor-pointer"
              onClick={() => deleteCompetencies(competency._id)}
            >
                 
            </i>
            {/* <PtgUiAlert message={('ERROR_MSG')} /> */}
          </div>
        ),
      },
    ];
  
    return (
      <div className="viewMastertable viewTable">
        {competencyModal('Add Competency', 'Add Competency')}
        <PtgUiMaterialTable
          data={competency}
          columns={Columns}
          filtering={true}
          paging={true}
          paginationPosition={'bottom'}
          grouping={true}
        />
      </div>
    );
  };


export default ViewCompetency