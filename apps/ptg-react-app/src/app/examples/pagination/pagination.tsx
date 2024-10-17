/**
 * @since Oct 2024
 * @author Manish Patidar
 * @desc Reusable Pagination Component
 *
 */
import { useState, useEffect } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { PtgUiPagination } from '@ptg-ui/react';

export interface PtgPaginationProps {}

export function PtgPagination(props: PtgPaginationProps) {
  const [showCode, setShowCode] = useState(false);
  const [dataCount, setDataCount] = useState(80);
  const [pageNumber, setPageNumber] = useState(1);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const pageIndex = (num) => {
    setPageNumber(num);
  };

  const componentCode = `
    import { PtgUiPagination } from '@ptg-ui/react';

    const [dataCount, setdataCount] = useState(60);
    const [pageNumber, setPageNumber] = useState(1);
    
    const pageIndex = (num) => {
      setPageNumber(num);
    };
  `;

  const htmlCode = `
    <PtgUiPagination
      data={[]}
      dataCount={dataCount}
      pageNumber={pageNumber}
      pageIndex={(num) => pageIndex(num)}
      siblingCount={1}
    />
  `;

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
      <div className="row">
        <div className="col-10 mt-1">
          <h5 className="font-weight-bold example-heading">Pagination</h5>
        </div>
        <div className="col-2 mr-5 mb-2">
          <CodeIcon
            onClick={ShowExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />

        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        <div className="ms-2">
          <PtgUiPagination
            data={[]}
            dataCount={dataCount}
            pageNumber={pageNumber}
            pageIndex={(num) => pageIndex(num)}
            siblingCount={1}
            pageSize={7}
          />
        </div>
      </div>
    </section>
  );
}
export default PtgPagination;
