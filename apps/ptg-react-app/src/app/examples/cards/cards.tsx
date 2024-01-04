import React, { useState } from 'react';
import { PtgCard } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
export default function Card() {
  const [showCode, setShowCode] = useState(false);
  const componentCode = `
  import {PtgCard} from "@ptg-ui/ptg-ui-web-components-react"
  const cardDataObj:any= [{
    cardId:1,
    cardTitle:'card title',
    cardContent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    src:'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },{
    cardId:2,
    cardTitle:'Card Title',
    cardContent:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    src:'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }]
  const handleClick = (data) => {
    console.log(data.detail);
  };
  `;
  const htmlCode = `
  {cardDataObj.map(card=>{
    return(
      <PtgCard {...card} 
        cardButtonText="select"
        isCardAction={true}
         cardContentLength={150}
         onHandleClick={handleClick} />
    )
  })}
  `;
  const cardDataObj: any = [
    {
      cardId: 1,
      cardTitle: 'card title',
      cardContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      cardId: 2,
      cardTitle: 'Card Title',
      cardContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    
  ];
  const handleClick = (data) => {
    console.log(data.detail);
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-10">
          <h3 className="font-weight-bold">Cards</h3>
        </div>
        <div className="col-2">
          <CodeIcon
            onClick={() => setShowCode((prev) => !prev)}
            fontSize="medium"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        {cardDataObj.map((card) => {
          return (
            <div className="col-md-4">
              <PtgCard {...card} 
              cardButtonText="select"
              isCardAction={true}
              cardContentLength={150}
               onHandleClick={handleClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
