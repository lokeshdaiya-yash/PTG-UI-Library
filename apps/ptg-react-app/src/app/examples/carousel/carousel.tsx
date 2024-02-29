/**
 * @since December 2023
 * @author Nimish Jain
 * @uses Example using Carousel as reusable component.
 *
*/

import { useState } from 'react';
import { PtgUiCarousel } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';

const CarouselExample = () => {

  const [showCode, setShowCode] = useState(false);

  const ShowExampleCode = () => {
    if(!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const componentCode = `
  import PtgUiCarousel from '@ptg-ui/ptg-ui-web-components-react';
  const sampleImages = ['https://picsum.photos/id/328/3264/2448', 'https://picsum.photos/id/431/5000/3334']

  export default CarouselExample;
  `
  const sampleImages = ['https://picsum.photos/id/328/3264/2448', 'https://picsum.photos/id/431/5000/3334', 'https://picsum.photos/id/5/5000/3334']

  const htmlCode = `
      <PtgUiCarousel images={sampleImages} img-width='500' img-height='400'></PtgUiCarousel>`

  const htmlCodeWithIndicators = `
      <PtgUiCarousel images={sampleImages} show-indicators="false" img-width='500' img-height='400'></PtgUiCarousel>`
    return (
      <div>
        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-2'>
        <div className='row'>
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">Carousel</h5>
          </div>
          <div className='col-2 mr-5 mb-2'>
            <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          <div className='mb-3'>
          {showCode && (
            <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
          )}
            <PtgUiCarousel images={sampleImages}></PtgUiCarousel>
        </div>
        </div>
        </section>
   
        <section className='card-section-two bg-white rounded pt-2 pb-2 mt-4'>
        <div className='row'>
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">Carousel example to hide Indicators</h5>
          </div>
          <div className='col-2 mr-5 mb-2'>
            <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
          </div>
          <hr className='horizontal-line'/>
          <div className='mb-3'>
          {showCode && (
            <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCodeWithIndicators} />
          )}
            <PtgUiCarousel images={sampleImages} show-indicators="false" img-width='400' img-height='300'></PtgUiCarousel>
          </div>
        </div>
        </section>
       
      </div>
  );
};

export default CarouselExample;
