import React, { useEffect, useState } from 'react';

const formatNum = (number) => {
  return number.toLocaleString('en-US');
};

const DynamicTable = () => {
  const [months, setMonths] = useState([]);

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then((response) => response.json())
      .then((data) => {
        setMonths(data.datatable.tablemonths);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="mx-4 mb-12 md:mx-auto md:w-fit">
      <table className="tracking-wide w-full md:hidden">
        <tbody>
          <tr className="text-left font-normal">
            <th className="uppercase text-xs opacity-50">MONTH</th>
            {months.map((tablemonth, index) => (
              <th key={index} className="font-normal">
                {tablemonth.tablename}
              </th>
            ))}
          </tr>
          <tr>
            <td colSpan={months.length + 1}>
              <hr className="w-full border-[#322E4C] my-1"></hr>
            </td>
          </tr>
          <tr>
            <td className="uppercase text-xs opacity-50 font-bold">total trades</td>
            {months.map((tablemonth, index) => (
              <td key={index}>{formatNum(tablemonth.tabletrades)}</td>
            ))}
          </tr>
          <tr>
            <td className="uppercase text-xs opacity-50 font-bold">avg win amt</td>
            {months.map((tablemonth, index) => (
              <td key={index}>{tablemonth.tableavgwin + '%'}</td>
            ))}
          </tr>
          <tr>
            <td className="uppercase text-xs opacity-50 font-bold">avg loss amt</td>
            {months.map((tablemonth, index) => (
              <td key={index}>{tablemonth.tableavgloss + '%'}</td>
            ))}
          </tr>
          <tr>
            <td className="uppercase text-xs opacity-50 font-bold">edge</td>
            {months.map((tablemonth, index) => (
              <td key={index}>{formatNum(tablemonth.tableedge)}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <table className="hidden md:block mx-auto">
        <tbody>
          <tr className="text-left font-normal uppercase text-xs opacity-50">
            <th className="w-28">MONTH</th>
            <th className="w-28">total trades</th>
            <th className="w-28">avg win amt</th>
            <th className="w-28">avg loss amt</th>
            <th className="w-28">edge</th>
          </tr>
          <tr>
            <td colSpan={5} className="h-2">
              <hr className="w-full border-[#322E4C]"></hr>
            </td>
          </tr>
          {months.map((tablemonth, index) => (
            <tr key={index} className="h-7 my-2 tracking-wide text-sm">
              <td>{tablemonth.tablename}</td>
              <td>{formatNum(tablemonth.tabletrades)}</td>
              <td>{tablemonth.tableavgwin + '%'}</td>
              <td>{tablemonth.tableavgloss + '%'}</td>
              <td>{formatNum(tablemonth.tableedge)}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
