import React, { useEffect, useState } from 'react';

const formatNum = (number) => {
  return number.toLocaleString('en-US');
};

const DynamicTable = () => {
  const [months, setMonths] = useState([]);

  useEffect(() => {
    fetch('./data/datatable.json')
      .then((response) => response.json())
      .then((data) => {
        setMonths(data.months);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="mx-4 mb-12 md:mx-auto md:w-fit">
      <table className="tracking-wide w-full md:hidden">
        <tbody>
          <tr className="text-left font-normal">
            <th className="uppercase text-xs opacity-50">MONTH</th>
            {months.map((month, index) => (
              <th key={index} className="font-normal">
                {month.name}
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
            {months.map((month, index) => (
              <td key={index}>{formatNum(month.trades)}</td>
            ))}
          </tr>
          <tr>
            <td className="uppercase text-xs opacity-50 font-bold">avg win amt</td>
            {months.map((month, index) => (
              <td key={index}>{month.avgwin + '%'}</td>
            ))}
          </tr>
          <tr>
            <td className="uppercase text-xs opacity-50 font-bold">avg loss amt</td>
            {months.map((month, index) => (
              <td key={index}>{month.avgloss + '%'}</td>
            ))}
          </tr>
          <tr>
            <td className="uppercase text-xs opacity-50 font-bold">edge</td>
            {months.map((month, index) => (
              <td key={index}>{formatNum(month.edge)}</td>
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
          {months.map((month, index) => (
            <tr key={index} className="h-7 my-2 tracking-wide text-sm">
              <td>{month.name}</td>
              <td>{formatNum(month.trades)}</td>
              <td>{month.avgwin + '%'}</td>
              <td>{month.avgloss + '%'}</td>
              <td>{formatNum(month.edge)}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
