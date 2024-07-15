import React from "react";
import { TableBody, TableHead } from "./base";

// Define the types for the props
// interface HeaderItem {
//   title: string;
//   value: () => any;
// }
interface TableProps {
  header: {
    title: string;
    value: (item: { [key: string]: string }) => React.ReactNode;
  }[];
  items: { [key: string]: string }[];
  style: {
    HBG: string | undefined;
    HTC: string | undefined;
    BBG: string[] | undefined;
  };
}

export const CTable: React.FC<TableProps> = ({ header, items, style }) => {
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
        {/* <CustomPagination
          handlePage={handlePage}
          {...props}
        /> */}
      </div>
    </div>
  );
};
