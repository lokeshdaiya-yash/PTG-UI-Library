import React, { useState } from 'react';
import { PtgBreadcrumbs } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';
import "./breadcrumbs.scss";

export default function Breadcrumb() {
  const [showCode, setShowCode] = useState(false);

  const { t } = useTranslation();

  const breadCrumbsDataArr: any = [
    { title: `${t('HOME')}`, link: '/home' },
    { title: `${t('ABOUT_US')}`, link: '/about' },
    { title: `${t('CONTACT_US')}`, link: '/contact' },
  ];
  const componentCode = `
 import { PtgBreadcrumbs } from '@ptg-ui/ptg-ui-web-components-react';
 const breadCrumbsDataArr:any= [
   { title: 'home', link: '/home'},
   { title: 'about us', link: '/about'},
   { title: 'contact us', link: '/contact'},
 ];
 `;
  const htmlCode = `
 <PtgBreadcrumbs datalist={breadCrumbsDataArr} />
 `;

  return (
   <section className='card-section-two bg-white rounded pt-2 pb-2 mt-2'>
    <div className="row">
      <div className="col-10 mb-2 mt-2">
        <h5 className="font-weight-bold example-heading">{t('BREADCRUMBS')}</h5>
      </div>
      <div className="col-lg-1 col-2">
        <CodeIcon
          onClick={() => setShowCode((prev) => !prev)}
          fontSize="large"
          className="show-code-icon"
        ></CodeIcon>
      </div>
      <hr className='horizontal-line'/>
      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="breadcrumbs-component col-md-12">
        <PtgBreadcrumbs datalist={breadCrumbsDataArr} />
      </div>
    </div>
    </section>
  );
}



