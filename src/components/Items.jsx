import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className="mb-4">
            <p className="text-center">
              <span className="text-gray-500 pr-2">{item.id}</span>-
              <span className="font-semibold pl-2">{item.title}</span>
            </p>
          </div>
        ))}
    </>
  );
}
