/**
 * @since April 2022
 * @author Ankit Patidar
 * @uses Example using download as reusable component.
 *
*/

import { useState, useEffect} from 'react';
import PtgUiDownload from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/download-file/downloadFile';
import { downloadFileData } from '../../mock/mocks';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { PtguseFetch } from '@ptg-ui/react';

const DownloadFileExample = () => {
  const [gridData, setGridData] = useState([]);
  const [showCode, setShowCode] = useState(false);
  const {data:apiData} = PtguseFetch('download-file-lists') as any

  useEffect(() => {
     if(apiData[0]){
      setGridData(apiData[0]?.attributes?.data?.data)
     }
  },[apiData])

  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };

  const componentCode = `
  export const downloadFileData:any = {
    columns:['SN', 'NAME', 'DESIGNATION', 'DEPARTMENT'],
    data: [
      [1, 'Astik', 'Manager', 'Engineering and MBA'],
      [2, 'Yogita', 'QA', 'Testing'],
      [3, 'Rajesh', 'Manager', 'Management'],
      [4, 'Swapnil', 'Developer', 'Development'],
      [5, 'Anmol', 'Consultant', 'HR'],
      [6, 'Mansi', 'Software Developer', 'Engineering'],
      [7, 'Astik', 'Manager', 'Engineering and MBA'],
      [8, 'Yogita', 'QA', 'Testing'],
      [9, 'Rajesh', 'Manager', 'Management'],
      [10, 'Yogita', 'QA', 'Testing'],
    ]
  }

  import PtgUiDownload from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/download-file/downloadFile';
  import { downloadFileData } from '../../mock/mocks';

  export default DownloadFileExample;
  `
  const htmlCode = `
import {useState, useEffect} from 'react'
import PtgUiDownload from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/download-file/downloadFile';
import { downloadFileData } from '../../mock/mocks';
import {
  PtguseFetch
} from '@ptg-ui/react';


const DownloadFileExample = () => {
  const [gridData, setGridData] = useState([]);
  const {data:apiData} = PtguseFetch('http://localhost:1337/api/download-file-lists') as any
  const fetchApi = ()=>{
    const data = apiData.map(item=>{
      return[
       item.attributes.SN,
       item.attributes.NAME,
       item.attributes.DESIGNATION,
       item.attributes.DEPARTMENT,
      ]
     })
     setGridData(data)
    }
  useEffect(()=>{
    fetchApi()
  },[apiData])
  console.log(gridData)
    return (
      <>
    <PtgUiDownload
      columns={downloadFileData.columns}
      dataToDownload={gridData}
    />
  `
    return (
    <section className='card-section-two bg-white rounded pt-2 pb-2 mt-2'>
    <div className='row'>
      <div className="col-10 mt-1">
        <h5 className="font-weight-bold example-heading">File Download</h5>
      </div>
      <div className='col-2 mr-5 mb-2'>
        <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
      </div>
      <hr className='horizontal-line'/>

      <div className="me-4">
      {!showCode ? (
        <PtgUiDownload
        columns={downloadFileData.columns}
        dataToDownload={gridData}
        />
      ):(
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      </div>
    </div>
    </section>
  );
};

export default DownloadFileExample;
