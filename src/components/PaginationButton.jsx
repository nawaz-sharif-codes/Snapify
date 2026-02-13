import React from "react";

const PaginationButton = ({page, setPageInc , setPageDec}) => {

  return (
    <div className="parentPaginationButton">
      <div className="paginationButtonContainer">
        {page == 1 ? (
          <button
            disabled={page == 1}
            onClick={() => setPageDec()}
            className="paginationButtonDisabledStyle"
          >
            Prev
          </button>
        ) : (
          <button
            disabled={page == 1}
            onClick={() => setPageDec()}
            className="paginationButtonStyle"
          >
            Prev
          </button>
        )}
        <span>Page {page}</span>
        <button
          onClick={() => setPageInc()}
          className="paginationButtonStyle"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationButton;
