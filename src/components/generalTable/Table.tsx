import React, { useState } from "react";
import { TableBody, TableHead } from "./base";
import { Pagination } from "./pagination";
import { CTHeaderItemIF, CTHItemIF, CTStyleIF } from "./interface";

interface TableProps {
  header: CTHeaderItemIF[];
  items: CTHItemIF[];
  style: CTStyleIF;
  caption: React.ReactNode | undefined;
  pagination:string |undefined
}

export const CTable: React.FC<TableProps> = ({
  header,
  items,
  style,
  caption,
  pagination
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  // Get current items
  const itemsLength = items?.length ||0;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
const total=200
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div
      style={{
        width: '80vw',
        // background: '#ffffff34',
        // borderRadius: '20px',
        // paddingBottom: '20px',
      }}
      
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px",
        }}
      >
        {/* You can add a title or any other component here */}
        {caption ? caption : ""}
      </div>
      <table style={{ minWidth: "500px", direction: "rtl",width:'100%' }}>
        <TableHead {...{ header, style }} />
        <TableBody {...{ header, items, style,pagination }} />
      </table>
        <Pagination
        {...{style,itemsLength}}
          itemsPerPage={itemsPerPage}
          totalItems={total}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
      </div>
    </div>
  );
};
