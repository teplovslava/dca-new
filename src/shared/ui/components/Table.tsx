import React from "react";

interface ITable {
  header: React.ReactNode[];
  rowItem: (row: Row, index: number) => React.ReactNode;
  rows: Row[];
}

export type Row = {
  [key: string]: string | number;
};

function Table({ header, rows, rowItem }: ITable) {
  return (
    <table className="w-full min-w-[700px]">
      <thead>
        <tr className="text-center border-[#fff]/20 border-solid border-b-[1px] mb-[1px]">
          {header.map((head, i) => (
            <td
              className="text-[14px] text-[#fff] font-[600] pb-2 px-1"
              key={i}
            >
              {head}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>{rows.map((row, i) => rowItem(row, i))}</tbody>
    </table>
  );
}

function RowItem({
  item,
  optionalStyle = "",
}: {
  item: React.ReactNode;
  optionalStyle?: string;
}) {
  return (
    <td
      className={
        "text-center text-[14px] text-[#8296A4] py-[7px] px-1" +
        " " +
        optionalStyle
      }
    >
      {item}
    </td>
  );
}

export { Table, RowItem };
