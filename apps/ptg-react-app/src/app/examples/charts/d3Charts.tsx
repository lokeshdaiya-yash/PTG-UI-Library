/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Example using 3D charts as reusable component.
 * 
*/
import {useState, useEffect} from  'react'
import { PtgUiD3Line, PtgUiD3Bar, PtgUiD3Pie, PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
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
  const {data:apiDataBarChart} = PtguseFetch('d3-bar-lists') as any
  const {data:apiDataPieChart} = PtguseFetch('d3-pie-r-lists') as any
  const {data:apiDataLineChart} = PtguseFetch('d3-line-lists') as any

  const { t } = useTranslation();

  useEffect(() => {
    const heightValue = Number(apiDataPieChart[0]?.attributes?.height)
    const widthValue = Number(apiDataPieChart[0]?.attributes?.width)
    const innerRadiusValue = Number(apiDataPieChart[0]?.attributes?.innerRadius)
    const outerRadiusValue = Number(apiDataPieChart[0]?.attributes?.outerRadius)

    const d3PieChart : any = {
      height : heightValue,
      width  : widthValue,
      innerRadius : innerRadiusValue,
      outerRadius : outerRadiusValue,
      data : apiDataPieChart[0]?.attributes?.data
    }
      setapiDataPieChartData(d3PieChart)
  },[apiDataPieChart])

  
  useEffect(() => {
    const d3LineChart : any = {
      data : apiDataLineChart[0]?.attributes?.data.map((item) => { 
        return {...item , date : new Date(item.date)}
      })
    }
    setapiDataLineChartData(d3LineChart)
  },[apiDataLineChart])

  useEffect(() => {
    const heightValue = Number(apiDataBarChart[0]?.attributes?.height)
    const widthValue = Number( apiDataBarChart[0]?.attributes?.width)
    const d3BarChart : any = {
      height : heightValue,
      width : widthValue,
      title : apiDataBarChart[0]?.attributes?.title,
      source : apiDataBarChart[0]?.attributes?.source,
      x_title : apiDataBarChart[0]?.attributes?.x_title,
      y_title :  apiDataBarChart[0]?.attributes?.y_title,
      data : apiDataBarChart[0]?.attributes?.data
    }
      setapiDataBarChartData(d3BarChart)
    },[apiDataBarChart])

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
