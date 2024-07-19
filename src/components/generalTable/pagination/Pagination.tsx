// import React from 'react'
import { FC } from "react";
import "./pagination.css";
interface PaginationIF{
  itemsPerPage:number
  totalItems:number
  currentPage:number
  setCurrentPage:(state: number) => void
}

export const Pagination:FC<PaginationIF> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  const max = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];
  const first =
    currentPage - 2 > 1
      ? max - 2 > currentPage
        ? currentPage - 2
        : max - 4
      : 1;
  const last =
    currentPage + 2 < max ? (first !== 1 ? currentPage + 2 : 5) : max;
  for (let i = first; i <= last; i++) {
    pageNumbers.push(i);
  }
  console.log({ last });
  console.log(max - 2, "las");
  const threeDot = [1, 2, 3];
  return (
    <nav style={{background:'black',width:'100%'}}>
      <ul className="pagination">
        {first !== 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div onClick={() => setCurrentPage(1)} className="page-link">
              &lt;
            </div>
            {threeDot?.map((i) => (
              <div
                key={i}
                style={{
                  display: "inline-block",
                  width: "5px",
                  height: "5px",
                  background: "gray",
                  borderRadius: "50px",
                }}
              ></div>
            ))}
          </div>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <span onClick={() => setCurrentPage(number)} className="page-link">
              {number}
            </span>
          </li>
        ))}
        {currentPage < max - 2 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {threeDot?.map((i) => (
              <div
                key={i}
                style={{
                  display: "inline-block",
                  width: "5px",
                  height: "5px",
                  background: "gray",
                  borderRadius: "50px",
                }}
              ></div>
            ))}
            <div onClick={() => setCurrentPage(max)} className="page-link">
              &gt;
            </div>
          </div>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};
