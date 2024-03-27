import { PtgUiD3Bar, PtgUiD3Line, PtgUiD3Pie } from '@ptg-ui/react';
// import { d3LineData } from '@ptg-react-app/mock/mocks';
import { useEffect, useState } from 'react';
import { getMasterdata } from '../../service/api';

// export const d3BandLineData: any = {
//   data: [
//     { date: new Date('2022-03-01'), value: 130 },
//     { date: new Date('2022-02-01'), value: 300 },
//     { date: new Date('2022-01-01'), value: 100 },
//   ],
// };

// #7C9D8E	Metallic Green
// #D4AF37	Metallic Gold
// #A97142	Metallic Bronze
// #C4AEAD

const color = ['gray', 'skyblue', 'blue', 'pink', 'rgb(69, 69, 69)'];
//  eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface D3ChartsProps {}
// export function SkillChart(props: D3ChartsProps) {

export function BandChart(D3ChartsProps) {
  const [masterdatas, setMasterdata] = useState<any>([]);
  const [band, setBand] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getMasterdata();
    setMasterdata(response?.data);
    const ghraphdata: any = [];
    console.log('responseData', response?.data);

    const bandCount = {};
    response?.data.forEach((element) => {
      const band = element.band;
      bandCount[band] = (bandCount[band] || 0) + 1;
      const randomColor = color[Math.floor(Math.random() * color?.length)];

      console.log('bandCount', bandCount);
      if (ghraphdata?.length == 0) {
        ghraphdata.push({
          band: element.band,
          count: bandCount[band],
          color: randomColor,
        });
      } else {
        if (ghraphdata[ghraphdata?.length - 1]['band'] !== element.band) {
          ghraphdata.push({
            band: element.band,
            count: bandCount[band],
            color: randomColor,
          });
        } else {
          ghraphdata[ghraphdata?.length - 1]['count'] = bandCount[band];
        }
      }
    });

    const KeyChangeObj = ghraphdata.map((item) => {
      return {
        Framework: item.band,
        Stars: item.count,
        color: item.color,
      };
    });

    console.log('KeyChangeObj', ghraphdata, KeyChangeObj);
    const bandgraph: any = {
      height: 300,
      width: 600,
      start: 0,
      end: 10,
      title: 'My Charts',
      source: 'Trending languages',
      x_title: 'Languages',
      y_title: 'Numbers',
      data: KeyChangeObj,
    };

    setBand(bandgraph);
  };
  console.log('band', band);

  return (
    <div className="p-4">
      <h5>hello</h5>
      
      <PtgUiD3Bar {...band} />

    </div>
  );
}
export default BandChart;
