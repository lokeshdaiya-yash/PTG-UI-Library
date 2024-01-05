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
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */

export interface PtgUiD3BarProps {
  data?:[],
}
export interface D3ChartsProps { }

export function D3Charts(props: D3ChartsProps) {
  const [apiDataBarChartData, setapiDataBarChartData] = useState<PtgUiD3BarProps>();
  const [apiDataPieChartData, setapiDataPieChartData] = useState<PtgUiD3BarProps>();
  const [apiDataLineChartData, setapiDataLineChartData] = useState<PtgUiD3BarProps>();
  const [barChartCode, setBarChartCode] = useState(false);
  const [pieChartCode, setPieChartCode] = useState(false);
  const [lineChartCode, setLineChartCode] = useState(false);
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
  const ShowExampleCode = () => {
    if(!barChartCode){
      setBarChartCode(true);
    }
    else{
      setBarChartCode(false);
    }
  };

  const ShowExampleCodeTwo = () => {
    if(!pieChartCode){
      setPieChartCode(true)
    }else{
      setPieChartCode(false)
    }
  };

  const ShowExampleCodeThree = () => {
    if(!lineChartCode){
      setLineChartCode(true)
    }else{
      setLineChartCode(false)
    }
  };

  const componentCodeBarChart = `
  export const d3BarData:any = {
    height:600,
    width:800,
    title:"My Charts",
    source:'Trending languages',
    x_title:'Languages',
    y_title:'Numbers',
    data: [
      { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
      { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
      { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
      { Framework: 'Backbone', Stars: '67647', Released: '2010',color: 'orange',},
      { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
    ],
  }
 
  import {  PtgUiD3Bar } from '@ptg-ui/react';
  import { d3BarData } from '@ptg-react-app/mock/mocks';

  export interface D3ChartsProps { }
  
  export function D3Charts(props: D3ChartsProps) {
   
  
  export default D3Charts;
  
  `
  const htmlCodeBarChart = `
    <PtgUiD3Bar {...d3BarData} />
  `

  const componentCodePieChart = `
  
  export const d3PieData:any= {
    height:600,
      width:800,
      innerRadius:0,
      outerRadius:150,
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        { Framework: 'Backbone', Stars: '67647', Released: '2010',color: 'orange' },
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ],
    }

  import {PtgUiD3Pie } from '@ptg-ui/react';
  import { d3PieData } from '@ptg-react-app/mock/mocks';

  export interface D3ChartsProps { }
  export function D3Charts(props: D3ChartsProps) {
   
  
  export default D3Charts;

`

  const htmlCodePieChart = `
    <PtgUiD3Pie {...d3PieData} />
  `

  const componentCodeLineChart = `

  export const d3LineData:any =
  {data:[
  { date:new Date("2022-03-01"), value:130 },
  { date:new Date("2022-02-15"), value:300 },
  { date: new Date("2022-02-01"), value:1000 },
  ]};

  import { PtgUiD3Line } from '@ptg-ui/react';
  import { d3LineData } from '@ptg-react-app/mock/mocks';

  export interface D3ChartsProps { }
  export function D3Charts(props: D3ChartsProps) {
   
  
  export default D3Charts;`

  const htmlCodeLineChart = `
    <PtgUiD3Line {...d3LineData} />
  `


  return (
    <Container fluid>
        <Row>
          <div className="col-11 mb-3">
            <h4>{t('BAR_CHART_TEXT')}</h4>
          </div>
         
          <div className='col-1 mr-5'>
            <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          
          {!barChartCode ? 
           (apiDataBarChartData && apiDataBarChartData?.data?.length ? <PtgUiD3Bar {...apiDataBarChartData} /> :null)
          : (
           <ShowCodeComponent componentCode={componentCodeBarChart} htmlCode={htmlCodeBarChart} />
          )}
        </Row>

        <Row>
        <div className="col-11 mb-3">
          <h4>{t('PIE_CHART_TEXT')}</h4>
        </div>
        <div className='col-1 mr-5'>
          <CodeIcon onClick={ShowExampleCodeTwo} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>

        {!pieChartCode ? (
          apiDataPieChartData && apiDataPieChartData?.data?.length ? <PtgUiD3Pie {...apiDataPieChartData} /> : null
        ): (
          <ShowCodeComponent componentCode={componentCodePieChart} htmlCode={htmlCodePieChart} />
        )}
        
        </Row>
        <Row>
        <div className="col-11 mb-3">
          <h4>{t('LINE_CHART_TEXT')}</h4>
        </div>

        <div className='col-1 mr-5'>
          <CodeIcon onClick={ShowExampleCodeThree} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>
        {!lineChartCode ? (
          apiDataLineChartData && apiDataLineChartData?.data?.length ? <PtgUiD3Line {...apiDataLineChartData} /> :null
        ): (
          <ShowCodeComponent componentCode={componentCodeLineChart} htmlCode={htmlCodeLineChart} /> 
        )}
         
        </Row>
      </Container>
  );
}

export default D3Charts;
