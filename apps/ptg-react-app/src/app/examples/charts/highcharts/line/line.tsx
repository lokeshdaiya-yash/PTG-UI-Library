import './line.scss';
import { PtgUiLine, PtguseFetch } from '@ptg-ui/react';
import { useState, useEffect } from 'react';
import { highchartsLineData, highchartsMultiLineData } from '@ptg-react-app/mock/mocks';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface PtgUiHCLineProps { }

export function PtgUiHCLine(props: PtgUiHCLineProps) {
  const { t } = useTranslation();

  const [high2DMultiLine, setHigh2DMultiLine] = useState<any[]>([]);
 
  const {data:apiHigh2DMultiLine} = PtguseFetch('high-chart-multi-line-lists') as any

  useEffect(()=>{
    const multiLineChart : any  = {
      title : apiHigh2DMultiLine[0]?.attributes?.chart?.title,
      data: [],
      remainingOptions: apiHigh2DMultiLine[0]?.attributes?.chart?.remainingOptions
    }
    setHigh2DMultiLine(multiLineChart)
  },[apiHigh2DMultiLine])

  return (

    <>
      <h4 className="m-3">{t('SINGLE_LINE_CHART')}</h4>
      {/* <PtgUiLine {...props[0]} /> */}
      <PtgUiLine {...highchartsLineData} />
      <h4 className="m-3">{t('MULTIPLE_LINE_CHART')}</h4>
      {/* <PtgUiLine {...highchartsMultiLineData} /> */}
      <PtgUiLine {...high2DMultiLine} />
    </>

  );
}

export default PtgUiHCLine;
