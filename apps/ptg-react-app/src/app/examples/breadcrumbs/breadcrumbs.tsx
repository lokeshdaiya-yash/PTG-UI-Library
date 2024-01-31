import React, { useState } from 'react';
import { PtgBreadcrumbs } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';

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
    <div className="row mt-3">
      <div className="col-md-10">
        <h3 className="font-weight-bold">{t('BREADCRUMBS')}</h3>
      </div>
      <div className="col-2">
        <CodeIcon
          onClick={() => setShowCode((prev) => !prev)}
          fontSize="medium"
          className="show-code-icon"
        ></CodeIcon>
      </div>
      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="col-md-12">
        <PtgBreadcrumbs datalist={breadCrumbsDataArr} />
      </div>
    </div>
  );
}
