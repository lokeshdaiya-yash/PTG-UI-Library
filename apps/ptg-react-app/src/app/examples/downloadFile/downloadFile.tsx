/**
 * @since April 2022
 * @author Ankit Patidar
 * @uses Example using download as reusable component.
 * 
*/

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
    <PtgUiDownload
      columns={downloadFileData.columns}
      dataToDownload={gridData}
    />
  );
};

export default DownloadFileExample;
