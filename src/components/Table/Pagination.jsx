import React, { forwardRef, useContext } from "react";
import { TableContext } from "./Table";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Pagination = forwardRef((props, ref) => {
  const { page } = useContext(TableContext);
  const {
    prevPage,
    nextPage,
    gotoLastPage,
    gotoFirstPage,
    currentPage,
    isFirstPage,
    isLastPage,
    totalPages,
  } = page;
  return (
    <div className="w-100 flex-row center-items">
      <Button onClick={gotoFirstPage} disabled={isFirstPage} title="First page">
        <FontAwesomeIcon icon={faAnglesLeft} />
      </Button>
      <Button onClick={prevPage} disabled={isFirstPage} title="Previos page">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      {currentPage} / {totalPages}
      <Button onClick={nextPage} disabled={isLastPage} title="Next page">
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
      <Button onClick={gotoLastPage} disabled={isLastPage} title="Last page">
        <FontAwesomeIcon icon={faAnglesRight} />
      </Button>
    </div>
  );
});
