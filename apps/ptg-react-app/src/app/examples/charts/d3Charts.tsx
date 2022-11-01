/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Example using 3D charts as reusable component.
 * 
*/
import { PtgUiD3Line, PtgUiD3Bar, PtgUiD3Pie } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import { d3BarData, d3LineData, d3PieData } from '@ptg-react-app/mock/mocks';
import { Container, Row } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface D3ChartsProps { }

export function D3Charts(props: D3ChartsProps) {
  const { t } = useTranslation();
  return (
    <Container fluid>
        <Row>
          <h4>{t('BAR_CHART_TEXT')}</h4>
          <PtgUiD3Bar {...d3BarData} />
        </Row>
        <Row>
          <h4>{t('PIE_CHART_TEXT')}</h4>
          <PtgUiD3Pie {...d3PieData} />
        </Row>
        <Row>
          <h4>{t('LINE_CHART_TEXT')}</h4>
          <PtgUiD3Line {...d3LineData} />
        </Row>
      </Container>
  );
}

export default D3Charts;
