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
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import highchartsLineData from mock
import { highchartsLineData } from '../../mock/mocks';

/* eslint-disable-next-line */
export interface HighchartsProps { }
export interface PtgUiD3BarProps {
  data?:[],
  series?:[]
}
export function Highcharts(props: HighchartsProps) {
  const [highchartsPieDataList, setHighchartsPieDataList] = useState<PtgUiD3BarProps>()
  const [high2DBarData, setHigh2DBarData] = useState<any[]>([]);
  const [high3DBarData, setHigh3DBarData] = useState<any[]>([]);
  const [high3DPieData, setHigh3DPieData] = useState<any[]>([]);
  const [high3DPieDataTitle, setHigh3DPieDataTitle] = useState<any[]>([]);
  const [high3DLineData, setHigh3DLineData] = useState<any[]>([]);
  const [high3DLineCat, setHigh3DLineCat] = useState<any[]>([]);
  const [high3DLineName, setHigh3DLineName] = useState<any[]>([]);
  const [high2DSingleLineChart, setHigh2DSingleLineChart] = useState<any[]>([]);

  const {data:apiDataPieChart} = PtguseFetch('higher-charts-pie-lists') as any
  const {data:apiHigh2DBarChart} = PtguseFetch('high-chart-column-lists') as any
  const {data:apiHigh3DBarChart} = PtguseFetch('bar-chart-3ds') as any
  const {data:apiHigh3DPieChart} = PtguseFetch('higher-charts-pie-lists') as any
  const {data:apiHigh3DLineChart} = PtguseFetch('bar-chart-3ds') as any
  const {data:api2DSingleLineChart} = PtguseFetch('high-charts-line-lists') as any

  const { t } = useTranslation();

  useEffect(()=>{
  
    const singleLineChart : any = {
      title : api2DSingleLineChart[0]?.attributes?.chart?.title,
      data : api2DSingleLineChart[0]?.attributes?.chart?.data,
      remainingOptions : api2DSingleLineChart[0]?.attributes?.chart?.remainingOptions
    }
   
    if(api2DSingleLineChart[0]){
      setHigh2DSingleLineChart(singleLineChart)
    }
   },[api2DSingleLineChart])

  useEffect(()=>{
    const highPieChart : any = {
      title : apiDataPieChart[0]?.attributes?.title,
      data : apiDataPieChart[0]?.attributes?.data
    }
    setHighchartsPieDataList(highPieChart)
  },[apiDataPieChart])

    useEffect(()=>{
      const dataArray = apiHigh2DBarChart[0]?.attributes?.categories.split(",");
      const value = apiHigh2DBarChart[0]?.attributes?.data;
   
      const barChartData : any  = {
        title : apiHigh2DBarChart[0]?.attributes?.title,
        data : value && JSON.parse(value),
        remainingOptions:{
          xAxis: {
            categories: dataArray
          },
        }
      }

      if(apiHigh2DBarChart[0]){
        setHigh2DBarData(barChartData)
      }
    },[apiHigh2DBarChart])

    useEffect(()=>{
      const arrayCat = apiHigh3DBarChart[0]?.attributes?.categories.split(",")
      const barChart3d : any = {
        data : apiHigh3DBarChart[0]?.attributes?.data,
        categories: arrayCat
      }
      setHigh3DBarData(barChart3d)
    },[apiHigh3DBarChart])

    useEffect(() => {
      setHigh3DPieData(apiHigh3DPieChart[0]?.attributes?.data)
      setHigh3DPieDataTitle(apiHigh3DPieChart[0]?.attributes?.title)
    },[apiHigh3DPieChart])

    useEffect(() => {
      setHigh3DLineData(apiHigh3DLineChart[0]?.attributes?.data)
      const categoryArray = apiHigh3DLineChart[0]?.attributes?.categories.split(",");
      setHigh3DLineCat(categoryArray)
    },[apiHigh3DLineChart])

    return (
    <div className="w-75">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title="2D graphs">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          <PtgUiColumn {...high2DBarData} />

          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          <PtgUiPie {...highchartsPieDataList} />
{/* 
          <PtgUiHCLine {...[highchartsLineData]} /> */}
          <PtgUiHCLine {...[high2DSingleLineChart]} />


          <h4 className="m-3">{t('LINE_BAR_CHART_TEXT')}</h4>
          <PtgUiHCLineBar />

          <h4 className="m-3">{t('STACKED_CHART')}</h4>
          <PtgUiHCSColumn />
        </Tab>
        <Tab eventKey="3d" title="3D Graphs">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          <PtgUi3dColumn {...high3DBarData} />
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          <PtgUi3dPie data={high3DPieData} title={high3DPieDataTitle} />
          <h4 className="m-3">{t('LINE_CHART_TEXT')}</h4>
          <PtgUi3dLine data={high3DLineData} categories={high3DLineCat} title={high3DLineName} />
        </Tab>
      </Tabs>
    </div> 
  );
}

export default Highcharts;
