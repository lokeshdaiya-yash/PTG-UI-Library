import { PtgUiColumn, PtgUiLineBar, PtgUiStackedColumn } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, {useEffect, useState} from 'react';
import { PtguseFetch} from '@ptg-ui/libs/ptg-ui-react-lib/src';
import { highchartsColumnData} from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
// export interface PtgUiHCStackedColumnProps {}

const Chart = () => {
   
  const [high2DStacked, setHigh2DStacked] = useState<[]>([]);

  const {data:apiHigh2DStacked} = PtguseFetch('stacked-column-lists') 

  useEffect(()=>{
    const categoryArray = apiHigh2DStacked[0]?.attributes?.categories.split(",");
    
    const StackedChartData  = {
      title : apiHigh2DStacked[0]?.attributes?.title,
      categories : categoryArray,
      remainingOptions : {
        series : 
          apiHigh2DStacked[0]?.attributes?.series
        }
    }

    setHigh2DStacked(StackedChartData)
  },[apiHigh2DStacked])
  return (
    <div>
        <p>chart</p>
        <PtgUiColumn {...highchartsColumnData}/>
    </div>
  )
}

export default Chart