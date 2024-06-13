import { PtgUiD3Bar} from '@ptg-ui/react';
import { useEffect, useState } from 'react';
import { getMasterdata } from '../../service/masterData-api';
import { getSkills } from '../../service/skill-api';

const color = ['green', 'blue', 'orange', 'pink', 'purple'];

export function SkillChart() {
  const [masterdatas, setMasterdata] = useState<any>([]);
  const [skillList, setSkillList] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  let noOfRecords: number;

  useEffect(() => {
    getAllUsers();
    getskillsList();
  }, []);

  const getskillsList = async () => {
    const response = await getSkills();
    setSkillList(response?.data);
  };

  const getAllUsers = async () => {
    const response = await getMasterdata();
    noOfRecords = response?.data.length;
    setMasterdata(response?.data);

    const graphRawData: any = [];
    const skillCount = {};

    masterdatas.forEach((element) => {
      const skills = element.skills;

      console.log("skills", skills);

      skillCount[skills] = (skillCount[skills] || 0) + 1;
      const randomColor = color[Math.floor(Math.random() * skillList.length)];

      if (graphRawData?.length === 0) {
        graphRawData.push({
          skills: element.skills,
          count: skillCount[skills],
          color: randomColor,
          
        });
        console.log("element.skills.name", skills)
        
      } else if (
        graphRawData[graphRawData?.length - 1]['skill'] !== element.skill
      ) {
        graphRawData.push({
          skills: element.skills,
          count: skillCount[skills],
          color: randomColor,
        });
        console.log(">>>>2",skills )
      } else {
        graphRawData[graphRawData?.length - 1]['count'] = skillCount[skills];
      }
      console.log("graphRawData", graphRawData)
    });

    const graphData = graphRawData.map((item) => {
      console.log(">>>>3",item.skills.name )
      return {
        Framework: item.skills,
        Stars: item.count,
        color: item.color,
      };
     
    }
    );
   
    const skillGraph: any = {
      height: 400,
      width: 400,
      start: 0,
      end: noOfRecords,
      title: 'Skill Chart',
      x_title: 'Skills',
      y_title: 'Numbers',
      data: graphData,
    };
    console.log("data",graphData )
    setData(skillGraph);
  };

  return (
    <div>
      <div>
      
      <PtgUiD3Bar {...data} />
      <p className='mt-3'>Skill Chart</p>
      
      <p className='mt-3'>Skill Chart</p>
      </div>
      
    </div>
  );
}
export default SkillChart;


