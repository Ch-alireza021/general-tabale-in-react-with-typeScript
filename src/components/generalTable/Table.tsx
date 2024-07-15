import React from "react";
import { TableBody, TableHead } from "./base";
import { Pagination } from "./pagination";
import { CTHeaderItemIF, CTHItemIF, CTStyleIF } from "./interface";

interface TableProps {
  header: CTHeaderItemIF[];
  items: CTHItemIF[];
  style: CTStyleIF;
  caption: React.ReactNode | undefined;
}

export const CTable: React.FC<TableProps> = ({
  header,
  items,
  style,
  caption,
}) => {
  return (
    <div
    //   style={{
    //     width: '80vw',
    //     background: '#ffffff34',
    //     borderRadius: '20px',
    //     paddingBottom: '20px',
    //   }}
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
      <table style={{ minWidth: "500px", direction: "rtl" }}>
        <TableHead {...{ header, style }} />
        <TableBody {...{ header, items, style }} />
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination />
      </div>
    </div>
  );
};
