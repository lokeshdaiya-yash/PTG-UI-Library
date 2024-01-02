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
  const {data:apiData} = PtguseFetch('download-file-lists') as any

  useEffect(() => {
     if(apiData[0]){
      setGridData(apiData[0]?.attributes?.data?.data)
     }
  },[apiData])

    return (
    <PtgUiDownload
      columns={downloadFileData.columns}
      dataToDownload={gridData}
    />
  );
};

export default DownloadFileExample;
