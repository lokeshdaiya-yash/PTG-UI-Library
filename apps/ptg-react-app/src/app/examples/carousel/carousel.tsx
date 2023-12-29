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
    return (
    <div className='row'>
      <div className="col-11">
        <h5 className="font-weight-bold">Carousel</h5>
      </div>
      <div className='col-1 mr-5 mb-3'>
        <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
      </div>

      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
        <PtgUiCarousel images={sampleImages} img-width='500' img-height='400'></PtgUiCarousel>
    </div>
  );
};

export default CarouselExample;
