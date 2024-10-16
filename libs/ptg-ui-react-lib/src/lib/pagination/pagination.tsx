/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Signup Component
 *
 */
import { useState, useEffect } from 'react';
import React from 'react';
import { usePagination } from 'react-table';

export interface PtgUiPaginationProps {
  data?: any;
  pageNumber?: number;
  pageCount?: number;
  pageIndex?: any;
}

export function PtgUiPagination({
  data,
  pageCount,
  pageNumber,
  pageIndex,
}: PtgUiPaginationProps) {
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const previousPage = () => {
    setCurrentPage(Number(currentPage) - 1);
    pageIndex(Number(currentPage) - 1);
  };

  const nextPage = () => {
    setCurrentPage(Number(currentPage) + 1);
    pageIndex(Number(currentPage) + 1);
  };

  const gotoPage = (number) => {
    setCurrentPage(number);
    pageIndex(number);
  };

  const getpages = () => {
    return [...Array(pageCount).keys()].map((i) => i + 1);
  };

  return (
    <>
      <ul className="pagination  justify-content-center mt-3">
        <li className={`page-item ${pageNumber === 1 ? 'disabled' : ''}`}>
          <a className="page-link" onClick={() => previousPage()}>
            Previous
          </a>
        </li>

        {getpages().map((num: any) => {
          return (
            <li className={`page-item ${pageNumber === num ? 'active' : ''}`}>
              <a className="page-link" onClick={() => gotoPage(num)}>
                {num}
              </a>
            </li>
          );
        })}

        <li
          className={`page-item ${pageNumber === pageCount ? 'disabled' : ''}`}
        >
          <a className="page-link" onClick={() => nextPage()}>
            Next
          </a>
        </li>
      </ul>
    </>
  );
}
export default PtgUiPagination;
