import { ReactNode, useState } from 'react';
import './tooltip.scss';


export interface TooltipProps {
  text : string;
  children : ReactNode;
}
    

export function TooltipComponent(props: TooltipProps) {

  const [isVisible, setIsVisible] = useState(false);

  console.log(props.text)
  console.log(isVisible)

  return (
    <div className="tooltip-container" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {props.children}

      {isVisible &&
        <span>
        <p style= {{ backgroundColor : "#6D6D6D", 
                     padding: "5px",
                     color : "white" }}>
          {props.text}</p>
        </span>
      }
      
    </div>
  );
}

export default TooltipComponent;
