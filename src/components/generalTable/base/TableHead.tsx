import React from 'react';

interface TableHeadProps {
  header: { title: string,value:any }[];
}

export const TableHead: React.FC<TableHeadProps> = ({ header: items = [] }) => {
  return (
    <thead style={{ direction: "rtl" }}>
      <tr style={{ backgroundColor: "red", direction: "rtl" }}>
        {items.map((item, index) => (
          <th
            style={{
              textTransform: "uppercase",
            }}
            key={index}
          >
            {item.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}

 
