/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Example using 3D charts as reusable component.
 * 
*/
import {useState, useEffect} from  'react'
import { PtgUiD3Line, PtgUiD3Bar, PtgUiD3Pie, PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import { d3BarData, d3LineData, d3PieData } from '@ptg-react-app/mock/mocks';
import { Container, Row } from 'react-bootstrap';

/* eslint-disable-next-line */

export interface PtgUiD3BarProps {
  data?:[],
}
export interface D3ChartsProps { }

export function D3Charts(props: D3ChartsProps) {
  const [apiDataBarChartData, setapiDataBarChartData] = useState<PtgUiD3BarProps>();
  const [apiDataPieChartData, setapiDataPieChartData] = useState<PtgUiD3BarProps>();
  const [apiDataLineChartData, setapiDataLineChartData] = useState<PtgUiD3BarProps>();
  const {data:apiDataBarChart} = PtguseFetch('http://localhost:1337/api/d3-bar-lists') as any

  const fetchApiBarChart = ()=>{
    const data = apiDataBarChart.map(item=>{
      return{
        id:item.id, 
        Framework: item.attributes.Framework,
        Stars:item.attributes.Stars,
        Released:item.attributes.Released,
        color:item.attributes.color,
      }
     })
     setapiDataBarChartData({
      ...apiDataBarChartData, 
      data:data,
     })
    }
    const {data:apiDataPieChart} = PtguseFetch('http://localhost:1337/api/d3-pie-lists') as any
   

    const fetchApiPieChart = ()=>{
      const data = apiDataPieChart.map(item=>{
        return{
          id:item.id, 
          Framework: item.attributes.Framework,
          Stars:item.attributes.Stars,
          Released:item.attributes.Released,
          color:item.attributes.color,
        }
       })
       
       setapiDataPieChartData(
        {
          ...apiDataPieChartData,
          data:data
      })
      }
      const {data:apiDataLineChart} = PtguseFetch('http://localhost:1337/api/d3-line-lists') as any
    const fetchApiLineChart = ()=>{
      const data = apiDataLineChart.map(item=>{
        return{
          id:item.id, 
          date: new Date(item.attributes.date),
          value:item.attributes.value,
        }
       })
       
       setapiDataLineChartData({
        ...d3LineData,
        data
       })
      }
  useEffect(()=>{
    fetchApiBarChart()
  },[apiDataBarChart])
  useEffect(()=>{
    fetchApiPieChart()
  },[apiDataPieChart])
  useEffect(()=>{
    fetchApiLineChart()
  },[apiDataLineChart])
  const { t } = useTranslation();
  return (
    <Container fluid>
        <Row>
          <h4>{t('BAR_CHART_TEXT')}</h4>
          {apiDataBarChartData && apiDataBarChartData?.data?.length ? <PtgUiD3Bar {...apiDataBarChartData} /> :null}
        </Row>
        <Row>
          <h4>{t('PIE_CHART_TEXT')}</h4>
          {apiDataPieChartData && apiDataPieChartData?.data?.length ? <PtgUiD3Pie {...apiDataPieChartData} /> : null}
        </Row>
        <Row>
          <h4>{t('LINE_CHART_TEXT')}</h4>
          {apiDataLineChartData && apiDataLineChartData?.data?.length ? <PtgUiD3Line {...apiDataLineChartData} /> :null}
        </Row>
      </Container>
  );
}

export default D3Charts;
