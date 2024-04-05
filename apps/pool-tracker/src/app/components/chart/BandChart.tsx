import { PtgUiD3Bar } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import { getMasterdata } from '../../service/masterData-api';
import { getBands } from '../../service/band-api';

const color = ['green', 'blue', 'orange', 'pink', 'purple'];

export function BandChart() {
  const [masterdatas, setMasterdata] = useState<any>([]);
  const [bandList, setBandList] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  let noOfRecords: number;

  useEffect(() => {
    getAllUsers();
    getBandsList();
  }, []);

  const getBandsList = async () => {
    const response = await getBands();
    setBandList(response?.data);
  };

  const getAllUsers = async () => {
    const response = await getMasterdata();
    // const totalRecords = response?.data.length;
    noOfRecords = response?.data.length;
    setMasterdata(response?.data);
 
    const graphRawData: any = [];
    const bandCount = {};
    
    masterdatas.forEach((element) => {
const band = element.band;
        bandCount[band] = (bandCount[band] || 0) + 1;
        const randomColor = color[Math.floor(Math.random() * bandList.length)];
        
        if (graphRawData?.length === 0) {
            graphRawData.push({
                band: element.band,
                count: bandCount[band],
                // percentage: (bandCount[band] / totalRecords) * 100,
                color: randomColor,
            });
} else if (graphRawData[graphRawData?.length - 1]['band'] !== element.band) {
            graphRawData.push({
                band: element.band,
                count: bandCount[band],
                // percentage: (bandCount[band] / totalRecords) * 100,
                color: randomColor,
            });
        } else {
            graphRawData[graphRawData?.length - 1]['count'] = bandCount[band];
            // graphRawData[graphRawData?.length - 1]['percentage'] = (bandCount[band] / totalRecords) * 100;
        }
    });
 
    const graphData = graphRawData.map((item) => {
        return {
            Framework: item.band,
            Stars: item.count,
            Percentage: item.percentage,
            color: item.color,
        };
    });
 
    const bandGraph: any = {
        height: 400,
        width: 400,
        start: 0,
        end: 10,
        // end: noOfRecords,
        title: 'Band Chart',
        x_title: 'Bands',
        y_title: 'Numbers',
        data: graphData,
    };
 
    setData(bandGraph);
};

  return (
    <div className="p-4">
      <PtgUiD3Bar {...data} />
      
     
      <p className='mt-3'>Band Graph</p>
      
      

    </div>
  );
}
export default BandChart;
