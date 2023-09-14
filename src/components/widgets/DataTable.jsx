const month1 = {
    name: 'January',
    trades: '8430',
    avgwin: '3210',
    avgloss: '10',
    edge: '21320',
};

const month2 = {
    name: 'February',
    trades: '12543',
    avgwin: '1879',
    avgloss: '23',
    edge: '44313',
};

export default function DynamicTable() {
    return (
        <div className="mx-4 mb-8">
            <table className="tracking-wide w-full">
                <tbody>
                    <tr className="text-left font-normal">
                        <th className='uppercase text-xs opacity-50'>MONTH</th>
                        <th className="font-normal">{month1.name}</th>
                        <th className="font-normal">{month2.name}</th>
                    </tr>
                    <tr>
                        <td className='uppercase text-xs opacity-50 font-bold'>total trades</td>
                        <td>{month1.trades}</td>
                        <td>{month2.trades}</td>
                    </tr>
                    <tr>
                        <td className='uppercase text-xs opacity-50 font-bold'>avg win amt</td>
                        <td>{month1.avgwin}</td>
                        <td>{month2.avgwin}</td>
                    </tr>
                    <tr>
                        <td className='uppercase text-xs opacity-50 font-bold'>avg loss amt</td>
                        <td>{month1.avgloss}</td>
                        <td>{month2.avgloss}</td>
                    </tr>
                    <tr>
                        <td className='uppercase text-xs opacity-50 font-bold'>edge</td>
                        <td>{month1.edge}</td>
                        <td>{month2.edge}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
  }