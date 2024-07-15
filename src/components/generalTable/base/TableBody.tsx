
import React from "react";
interface HeaderItem<T> {
  length: number;
  value: (item: T) => React.ReactNode;
}

interface TableBodyProps<T> {
  items: T[];
  header: HeaderItem<T>[];
}

export const TableBody = <T,>({
  items = [],
  header = [],
}: TableBodyProps<T>) => {
  const color = ["#333333e0", "#00000080"];
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
      return { borderRadius: "0 0 0 20px" };
    } else if (itemIndex === items.length - 1 && colIndex === 0) {
      return { borderRadius: "0 0 20px 0" };
    }
    return null;
  };
  return (
        <tbody>
          {items.map((item, itemIndex) => (
            <tr
              key={itemIndex}
              style={{  padding: "20px" }}
            >
              {header.map((col, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    padding: "20px",
                    ...setBorder({ colIndex, itemIndex }),
                    background: color[itemIndex % 2],
                    color:'white'
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
