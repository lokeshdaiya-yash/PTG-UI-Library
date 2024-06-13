import { PtgUiD3Bar, PtgUiD3Pie } from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import { getCompetency } from '../../service/competency-api';
import { getMasterdata } from '../../service/masterData-api';

const color = ['green', 'blue', 'orange', 'pink', 'purple'];

export function CompetancyChart() {
  const [masterdatas, setMasterdata] = useState<any>([]);
  const [competencyList, setCompetencyList] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  let noOfRecords: number;

  useEffect(() => {
    getAllUsers();
    getcompetencysList();
  }, []);

  const getcompetencysList = async () => {
    const response = await getCompetency();
    setCompetencyList(response?.data);
  };

  const getAllUsers = async () => {
    const response = await getMasterdata();
    noOfRecords = response?.data.length;
    setMasterdata(response?.data);

    const graphRawData: any = [];
    const competencyCount = {};

    masterdatas.forEach((element) => {
      const competency = element.competency;

      competencyCount[competency] = (competencyCount[competency] || 0) + 1;
      const randomColor =
        color[Math.floor(Math.random() * competencyList.length)];

      if (graphRawData?.length === 0) {
        graphRawData.push({
          competency: element.competency,
          count: competencyCount[competency],
          color: randomColor,
        });
      } else if (
        graphRawData[graphRawData?.length - 1]['competency'] !==
        element.competency
      ) {
        graphRawData.push({
          competency: element.competency,
          count: competencyCount[competency],
          color: randomColor,
        });
      } else {
        graphRawData[graphRawData?.length - 1]['count'] =
          competencyCount[competency];
      }
    });

    const graphData = graphRawData.map((item) => {
      return {
        Framework: item.competency,
        Stars: item.count,
        color: item.color,
      };
    });

    const competencyGraph: any = {
      height: 400,
      width: 400,
      start: 0,
      end: noOfRecords,
      title: 'competency Chart',
      x_title: 'competencys',
      y_title: 'Numbers',
      data: graphData,
    };

    setData(competencyGraph);
  };
  return (
    <div>
      <div>
        <PtgUiD3Bar {...data} />
        <h6> Competency chart</h6>
      </div>
    </div>
  );
}
export default CompetancyChart;
