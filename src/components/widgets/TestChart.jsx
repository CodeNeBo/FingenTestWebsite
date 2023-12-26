import React, { PureComponent } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const TestChart = ({ historyData }) => {
  return (
    <ResponsiveContainer width="100%" height={96}>
      <AreaChart data={historyData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke="#ffffff" fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TestChart;

{/* <ResponsiveContainer width={280} height={120}>
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="uv" stroke="#ffffff" fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer> */}