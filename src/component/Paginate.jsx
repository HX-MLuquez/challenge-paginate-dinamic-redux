// ____________________\\
// *** code Paginate *** \\
/*\\_______________________//*/

import React from "react";
import "./Paginate.css";
import { useSelector, useDispatch } from "react-redux";

import { onPageChange } from "../app/Actions/index";

export default function Paginate({ totalPages }) {
  const { numPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlePrevPage = () => {
    if (numPage > 0) {
      dispatch(onPageChange(numPage - 1));
    }
  };

  const handleNextPage = () => {
    if (numPage < totalPages - 1) {
      dispatch(onPageChange(numPage + 1));
    }
  };
  // console.log("--->",totalPages)
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let page = 0; page < totalPages; page++) {
      if (page > numPage - 3 && page < numPage + 3) {
        pageNumbers.push(
          <li
            key={page}
            className={numPage === page ? "active" : ""}
            onClick={() => dispatch(onPageChange(page))}
          >
            {page + 1}
          </li>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        disabled={numPage === 0}
        onClick={handlePrevPage}
      >
        PREV
      </button>
      <ul className="pagination__numbers">{renderPageNumbers()}</ul>
      <button
        className="pagination__button"
        disabled={numPage === totalPages - 1}
        onClick={handleNextPage}
      >
        NEXT
      </button>
    </div>
  );
}
