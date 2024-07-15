// export const TableBody = ({ items = [], header = [] }) => {
//   return (
//     <tbody>
//       {items.map((item) => (
//         <tr key={1}>
//           {header.map((col) => (
//             <td key={2}>{col.value(item)}</td>
//           ))}
//         </tr>
//       ))}
//     </tbody>
//   );
// };

import React from 'react';
interface HeaderItem<T> {
  value: (item: T) => React.ReactNode;
}

interface TableBodyProps<T> {
  items: T[];
  header: HeaderItem<T>[];
}

export const TableBody = <T,>({ items = [], header = [] }: TableBodyProps<T>) => {
  return (
    <tbody>
      {items.map((item, itemIndex) => (
        <tr key={itemIndex}>
          {header.map((col, colIndex) => (
            <td key={colIndex}>{col.value(item)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
