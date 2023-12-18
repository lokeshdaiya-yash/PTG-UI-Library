import React from 'react';
import { PtgBreadcrumbs } from '@ptg-ui/ptg-ui-web-components-react';
export default function Breadcrumb() {
  const breadCrumbsDataArr = [
    { title: 'home', link: '/home' },
    { title: 'about', link: '/about' },
    { title: 'contact', link: '/contact' },
  ];
  return (
    <div className="row mt-3">
      <div className="col-md-12">
        <PtgBreadcrumbs datalist={breadCrumbsDataArr} />
      </div>
    </div>
  );
}
