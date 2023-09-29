const month1 = {
    name: 'January',
    trades: 8430,
    avgwin: 78,
    avgloss: 10,
    edge: 21320,
};

const month2 = {
    name: 'February',
    trades: 12543,
    avgwin: 56,
    avgloss: 23,
    edge: 44313,
};

export default function DynamicTable() {
    const formatNum = (number) => {
        return number.toLocaleString('en-US');
      };
    return (
        <div className="mx-4 mb-12 md:mx-auto md:w-fit">
            <table className="tracking-wide w-full md:hidden">
                <tbody>
                    <tr className="text-left font-normal">
                        <th className='uppercase text-xs opacity-50'>MONTH</th>
                        <th className="font-normal">{month1.name}</th>
                        <th className="font-normal">{month2.name}</th>
                    </tr>
                    <tr><td colSpan={3}><hr className="w-full border-[#322E4C] my-1"></hr></td></tr>
                    <tr>
                        <td className='uppercase text-xs opacity-50 font-bold'>total trades</td>
                        <td>{formatNum(month1.trades)}</td>
                        <td>{formatNum(month2.trades)}</td>
                    </tr>
                    <tr>
                        <td className='uppercase text-xs opacity-50 font-bold'>avg win amt</td>
                        <td>{month1.avgwin+"%"}</td>
                        <td>{month2.avgwin+"%"}</td>
                    </tr>
                    <tr>
                        <td className='uppercase text-xs opacity-50 font-bold'>avg loss amt</td>
                        <td>{month1.avgloss+"%"}</td>
                        <td>{month2.avgloss+"%"}</td>
                    </tr>
                    <tr>
                        <td className='uppercase text-xs opacity-50 font-bold'>edge</td>
                        <td>{formatNum(month1.edge)}</td>
                        <td>{formatNum(month2.edge)}</td>
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
                    <tr className="h-7 my-2 tracking-wide text-sm">
                        <td>{month1.name}</td>
                        <td>{formatNum(month1.trades)}</td>
                        <td>{month1.avgwin+'%'}</td>
                        <td>{month1.avgloss+'%'}</td>
                        <td>{formatNum(month1.edge)}</td>
                    </tr>
                    <tr>
                        <td colSpan={5} className="h-2"><hr className="w-full border-[#322E4C]"></hr></td>
                    </tr>
                        
                    <tr className="h-7 my-2 tracking-wide text-sm">
                        <td>{month2.name}</td>
                        <td>{formatNum(month2.trades)}</td>
                        <td>{month2.avgwin+'%'}</td>
                        <td>{month2.avgloss+'%'}</td>
                        <td>{formatNum(month2.edge)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
  }