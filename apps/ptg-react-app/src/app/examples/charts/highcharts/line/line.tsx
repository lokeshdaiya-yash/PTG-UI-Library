import './line.scss';
import { PtgUiLine } from '@ptg-ui/react';
import { highchartsLineData, highchartsMultiLineData } from '@ptg-react-app/mock/mocks';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface PtgUiHCLineProps { }

export function PtgUiHCLine(props: PtgUiHCLineProps) {
  const { t } = useTranslation();
  return (
    <>
      <h4 className="m-3">{t('SINGLE_LINE_CHART')}</h4>
      <PtgUiLine {...props[0]} />
      <h4 className="m-3">{t('MULTIPLE_LINE_CHART')}</h4>
      <PtgUiLine {...highchartsMultiLineData} />
    </>

  );
}

export default PtgUiHCLine;
