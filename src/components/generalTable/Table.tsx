
import React from 'react';
import { TableBody, TableHead } from './base';

// Define the types for the props
interface HeaderItem {
  title: string;
  value: () => any;
}

interface TableProps {
  header: HeaderItem[];
  items: Record<string, string>[];
}

export const CTable: React.FC<TableProps> = ({ header, items }) => {
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
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   padding: 3,
        // }}
      >
        {/* You can add a title or any other component here */}
      </div>
      <table style={{minWidth:"500px",direction: "rtl",}}>
        <TableHead {...{header}} />
        <TableBody {...{header,items}} />
      </table>
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {/* <CustomPagination
          handlePage={handlePage}
          {...props}
        /> */}
      </div>
    </div>
  );
};
