import React from 'react';
import './Config.scss';
import ViewDesignation from '../designation/ViewDesignation';
import ViewSkills from '../skills/ViewSkills';
import ViewBand from '../band/ViewBand';
import ViewCompetency from '../competency/ViewCompetency';
import { PtgAccordion } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import ViewLocation from '../location/ViewLocation';

const Config = () => {
  const label = 'Lorem Ipsum';
  const description =
    'Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank.';
  const bgColor = 'white';
  const defaultOpened = false;
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-4">
          <ViewDesignation />
        </div>
        <div className="col-4">
          <ViewSkills />
        </div>
        <div className="col-4">
          <ViewBand />
        </div>
      </div>
      <div className="row mt-5 mb-4">
        <div className="col-4">
          <ViewCompetency />
        </div>
        <div className="col-4">
          <ViewLocation />
        </div>
      </div>

      {/* ==============accordion ============================== */}
      {/* <PtgAccordion label={label} description={description} color={bgColor}>
        <div slot="body-block">
          <h2>React Slot for Body</h2>
        </div>
      </PtgAccordion> */}
    </div>
  );
};

export default Config;
