//import './line.scss';
import {useEffect, useState} from 'react'
import {PtgUiLineBar, PtguseFetch} from '@ptg-ui/react';
import { highchartsLineBarData} from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCLineBarProps {}

export function PtgUiHCLineBar(props: PtgUiHCLineBarProps) {
  const [highchartsPieDataList, setHighchartsPieDataList] = useState(highchartsLineBarData)
  const {data:apiDataLineChart} = PtguseFetch('http://localhost:1337/api/line-bar-lists') as any
  // console.log('height chart bar', highchartsLineBarData)
  const fetchApiPieChart = ()=>{
    const data = apiDataLineChart.map(item=>{
      return{
        id:item.id, 
        name: item.attributes.name,
        type:item.attributes.type,
        data:item.attributes.data,
      }
     })
     const dataList = {...highchartsLineBarData}
     dataList.remainingOptions.series.map((item, i)=>{
    //  console.log(new Set(data[i]?.data.split("[").join('').split("]").join(',').trim()]))
     return item.data=[data[i]?.data]
     }) 
// dataList.remainingOptions.series[0].data = data
    console.log("dataList", dataList)
    console.log('highchartsLineBarData', highchartsLineBarData)
     setHighchartsPieDataList(dataList)
    }
    useEffect(()=>{
      fetchApiPieChart()
    },[apiDataLineChart])
  return (
    <>
  <PtgUiLineBar {...highchartsLineBarData} />
    </>
  
  );
}

export default PtgUiHCLineBar;
