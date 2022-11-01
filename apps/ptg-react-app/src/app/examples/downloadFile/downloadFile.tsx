/**
 * @since April 2022
 * @author Ankit Patidar
 * @uses Example using download as reusable component.
 * 
*/


import PtgUiDownload from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/download-file/downloadFile';
import { downloadFileData } from '../../mock/mocks';

const DownloadFileExample = () => {
  
    return (
    <PtgUiDownload
      columns={downloadFileData.columns}
      dataToDownload={downloadFileData.data}
    />
  );
};

export default DownloadFileExample;
