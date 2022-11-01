import AccordionItem from './accordian-item';
import './accordian.scss';

/* eslint-disable-next-line */
export interface PtgUiAccordianProps {
  stories:any
}

export function PtgUiAccordian({stories}: PtgUiAccordianProps) {
  return (
    <div className="accordion">
      {stories.map((story:any, index:any) => {
        return (
          <div className="accordion-item" key ={index}>
            <AccordionItem title={story.title} content={story.content} />
          </div>
        );
      })}
    </div>
  );
}

export default PtgUiAccordian;
