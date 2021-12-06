import React, { useEffect, useState } from "react";
import Items from "./Items";
import ReactPaginate from "react-paginate";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export default function PaginatedItems({ itemsPerPage, items }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        previousClassName={"text-blue-600 text-lg font-bold"}
        nextClassName={"text-blue-600 text-lg font-bold"}
        activeClassName={"text-gray-900 font-bold"}
        containerClassName={"flex justify-center items-center gap-6 pt-20"}
        pageClassName={"text-gray-400"}
      />
    </>
  );
}
