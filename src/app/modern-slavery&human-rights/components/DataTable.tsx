import React from "react";

export default function DataTable({
  columns,
  rows,
}: {
  columns: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="mb-6 overflow-hidden rounded-lg border border-[rgba(212,175,55,0.2)] bg-white">
      <table className="w-full border-collapse text-left lg:min-w-[560px]">
        <thead>
          <tr className="bg-[linear-gradient(135deg,rgb(45,80,22)_0%,rgb(74,124,46)_100%)] lg:bg-[linear-gradient(172.95deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(45,80,22)_0%,rgb(74,124,46)_100%)]">
            <th className="px-2 py-3 text-[15.2px] font-semibold text-white lg:px-4">
              {columns[0]}
            </th>
            <th className="px-2 py-3 text-[15.2px] font-semibold text-white lg:px-4">
              {columns[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-[rgba(212,175,55,0.15)]">
              <td className="px-2 py-3 align-top text-[13.6px] font-bold text-[#2C2C2C] lg:px-4 lg:py-4 lg:text-base">
                {row[0]}
              </td>
              <td className="px-2 py-3 align-top text-[13.6px] text-[#2C2C2C] lg:px-4 lg:py-4 lg:text-base">
                {row[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
