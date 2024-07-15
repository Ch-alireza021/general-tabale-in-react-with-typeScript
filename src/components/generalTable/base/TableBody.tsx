import React from "react";

interface TableBodyProps {
  items: { [key: string]: string }[];
  header: { title: string; value: (item: { [key: string]: string }) => React.ReactNode }[];
  style: {
    HBG?: string;
    HTC?: string;
    BBG?: string[];
  };
}

export const TableBody: React.FC<TableBodyProps> = ({
  items = [],
  header = [],
  style,
}) => {
  const color = [
    style?.BBG?.[0] || "#333333e0",
    style?.BBG?.[1] || "#00000080",
  ];

  type BorderStyles = {
    borderRadius: string;
  };

  type SetBorderParams = {
    itemIndex: number;
    colIndex: number;
  };

  const setBorder = ({
    itemIndex,
    colIndex,
  }: SetBorderParams): BorderStyles | null => {
    if (itemIndex === items.length - 1 && colIndex === header.length - 1) {
      return { borderRadius: "0 0  0 20px" };
    } else if (itemIndex === items.length - 1 && colIndex === 0) {
      return { borderRadius: "0 0 20px 0 " };
    }
    return null;
  };

  return (
    <tbody>
      {items.map((item, itemIndex) => (
        <tr key={itemIndex} style={{ padding: "20px" }}>
          {header.map((col, colIndex) => (
            <td
              key={colIndex}
              style={{
                padding: "20px",
                ...setBorder({ colIndex, itemIndex }),
                background: color[itemIndex % 2],
                color: "white",
              }}
            >
              {col.value(item)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
