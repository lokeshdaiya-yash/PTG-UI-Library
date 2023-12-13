/**
 * @since March 2022
 * @author Ankit Patidar
 * @updatedby Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 * 
*/
import {useState, useEffect} from 'react'
import PtgUiHCLine from './highcharts/line/line';
import PtgUiHCLineBar from './highcharts/linebar/linebar';
import PtgUiHCSColumn from './highcharts/stackedColumn/stackedColumn';
import { PtgUiColumn, PtgUiPie, PtgUi3dLine, PtgUi3dColumn, PtgUi3dPie, PtguseFetch } from '@ptg-ui/react';
import { highchartsLineData, highchartsPieData, highchartsColumnData, line3DOptions, column3DOptions, pie3dData } from '@ptg-react-app/mock/mocks';
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface HighchartsProps { }
export interface PtgUiD3BarProps {
  data?:[],
  series?:[]
}
export function Highcharts(props: HighchartsProps) {
  const [highchartsPieDataList, setHighchartsPieDataList] = useState<PtgUiD3BarProps>()
  const [highchartsLineDataList, setHighchartsLineDataList] = useState<PtgUiD3BarProps>(highchartsLineData)
  const {data:apiDataPieChart} = PtguseFetch('http://localhost:1337/api/higher-charts-pie-lists') as any

   const { t } = useTranslation();

   const fetchApiPieChart = ()=>{
    const data = apiDataPieChart.map(item=>{
      return{
        id:item.id, 
        name: item.attributes.name,
        y:item.attributes.y,
        sliced:item.attributes.sliced,
        selected:item.attributes.selected,
      }
     })
     
     setHighchartsPieDataList(
      {
        ...highchartsPieDataList,
        data:data
    })
    }
    useEffect(()=>{
      fetchApiPieChart()
    },[apiDataPieChart])

    const {data:apiDataLineChart} = PtguseFetch('http://localhost:1337/api/high-charts-line-lists') as any
   const fetchApiLineChart = ()=>{
    const data = apiDataLineChart.map(item=>Number(item.attributes.series))
const dataList = {...highchartsLineData}
dataList.remainingOptions.series[0].data = data
    setHighchartsLineDataList(dataList)
    }
    useEffect(()=>{
      fetchApiLineChart()
    },[apiDataLineChart])
  return (
    <div className="w-75">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title="2D graphs">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          <PtgUiColumn {...highchartsColumnData} />
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          <PtgUiPie {...highchartsPieDataList} />
          <PtgUiHCLine {...[highchartsLineDataList]} />
          <h4 className="m-3">{t('LINE_BAR_CHART_TEXT')}</h4>
          <PtgUiHCLineBar />
          <h4 className="m-3">{t('STACKED_CHART')}</h4>
          <PtgUiHCSColumn />
        </Tab>
        <Tab eventKey="3d" title="3D Graphs">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          <PtgUi3dColumn {...column3DOptions} />
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          <PtgUi3dPie {...pie3dData} />
          <h4 className="m-3">{t('LINE_CHART_TEXT')}</h4>
          <PtgUi3dLine {...line3DOptions} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Highcharts;
