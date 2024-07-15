import React from "react";

interface TableHeadProps {
  header: { title: string; value: any }[];
}

export const TableHead: React.FC<TableHeadProps> = ({ header: items = [] }) => {
  return (
    <thead>
      <tr
        style={{
          direction: "rtl",
          backgroundColor: "#2e71a7",
          borderRadius: " 20px 20px 0 0 ",
        }}
      >
        {items.map((item, index) => (
          <th
            style={{
              textTransform: "uppercase",
              padding: "20px",
              borderRadius:
                index === 0
                  ? " 0 20px 0  0 "
                  : index === items.length - 1
                  ? " 20px 0 0 0 "
                  : 0,
            }}
            key={index}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#2e71a7",
                padding: "20px 0",
                borderRadius: " 20px 20px 20px 20px ",
                color: "white",
              }}
            >
              {item.title}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
