import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Chart.scss';
import { PtgUiMultiSelectbox } from '@ptg-ui/libs/ptg-ui-react-lib/src';

const Chart = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  
  const CHART_LIST = [
    { value: 'chart/bandchart', label: 'BandChart', name: 'config' },
    { value: 'chart/skillchart', label: 'SkillsChart', name: 'config' },
    { value: 'chart/competancychart', label: 'Competency', name: 'config' },
  ];
  const onSelect = (e) => {
    const path = '/' + e[0].value;
    navigate(path);
  };

  const onRemove: any = (event: any) => {
    console.log('  Values,onRemove', event);
  };

  return (
    <div className="navContainer">
      <div className='chartSelect'>
      <PtgUiMultiSelectbox 
              className='chartSelectBox'
              name="config"
              list={CHART_LIST}
              onSelect={onSelect}
              showCheckbox={false}
              singleSelect={true}
            />
      </div>
      {/* <div className="sideNav">
        <header className="chartNavbar">
          <Link to="bandchart">Band Chart</Link>
          <Link to="skillchart"> Skill Chart</Link>
          <Link to="competancychart">Competancy Chart</Link>
          <Link to="Experiencechart">experience Chart</Link>
          <Link to="agingchart"> Aging Chart</Link>
        </header>
      </div> */}
      <div className="">
        <Outlet />
      </div>
      
    </div>
  );
};

export default Chart;
