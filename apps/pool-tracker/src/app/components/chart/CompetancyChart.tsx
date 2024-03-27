import { PtgUiD3Bar, PtgUiD3Pie } from '@ptg-ui/react';
// import { d3PieData } from '@ptg-react-app/mock/mocks';
export const d3CompetencyPieData: any = {
  height: 600,
  width: 800,
  innerRadius: 0,
  outerRadius: 150,
  data: [
    { Framework: 'UI', Stars: '100000', Released: '2014', color: '#454545' },
    { Framework: 'Java', Stars: '120793', Released: '2013', color: 'pink' },
    { Framework: 'Sap', Stars: '92342', Released: '2014', color: 'green' },
    // { Framework: 'UI', Stars: '67647', Released: '2010', color: 'orange' },
    // { Framework: 'Java', Stars: '12171', Released: '2011', color: 'blue' },
  ],
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface D3ChartsProps { }
// export function CompetancyChart(props: D3ChartsProps) {
export function CompetancyChart() {
  return (
    <div>
      <div>
        <PtgUiD3Pie {...d3CompetencyPieData} />
      </div>
      <div>
        <PtgUiD3Bar {...d3CompetencyPieData} />
      </div>
    </div>
  );
}
export default CompetancyChart;