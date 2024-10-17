/**
 * @since Oct 2022
 * @author Manish Patidar
 * @desc Reusable pagination Component
 *
 */
import { useState, useEffect } from 'react';
import React from 'react';
import { usePagination, DOTS } from './usePagination';

export interface PtgUiPaginationProps {
  data?: any;
  pageNumber?: number;
  dataCount?: number;
  pageIndex?: any;
  siblingCount?: number;
  pageSize?: number;
}

export function PtgUiPagination({
  data,
  dataCount,
  pageNumber,
  pageIndex,
  siblingCount,
  pageSize,
}: PtgUiPaginationProps) {
  const [currentPage, setCurrentPage] = useState(pageNumber);

  const paginationRange = usePagination({
    currentPage,
    dataCount,
    siblingCount,
    pageSize,
  });

  const previousPage = () => {
    setCurrentPage(Number(currentPage) - 1);
    pageIndex(Number(currentPage) - 1);
  };

  const nextPage = () => {
    if (
      dataCount &&
      pageSize &&
      Math.ceil(dataCount / pageSize) > Number(currentPage)
    ) {
      setCurrentPage(Number(currentPage) + 1);
      pageIndex(Number(currentPage) + 1);
    }
  };

  const gotoPage = (number) => {
    setCurrentPage(number);
    pageIndex(number);
  };

  return (
    <>
      <ul className="pagination  justify-content-center mt-3">
        <li className={`page-item ${pageNumber === 1 ? 'disabled' : ''}`}>
          <a className="page-link" onClick={() => previousPage()}>
            Previous
          </a>
        </li>
        {paginationRange?.map((num) => {
          if (num === DOTS) {
            return (
              <li className="pagination-item dots">
                <a className="page-link">&#8230;</a>
              </li>
            );
          }

          return (
            <li className={`page-item ${pageNumber === num ? 'active' : ''}`}>
              <a className="page-link" onClick={() => gotoPage(num)}>
                {num}
              </a>
            </li>
          );
        })}

        <li
          className={`page-item ${
            dataCount &&
            pageSize &&
            Math.ceil(dataCount / pageSize) === Number(currentPage)
              ? 'disabled'
              : ''
          }`}
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
