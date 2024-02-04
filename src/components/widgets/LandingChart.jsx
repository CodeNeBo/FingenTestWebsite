import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    amt: 2100,
  },
  {
    name: 'Page A',
    uv: 4000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" strokeOpacity={0} />
          <YAxis strokeOpacity={0} />
          <Tooltip />
          <Bar dataKey="uv" fill="#000000" radius={[12, 12, 0, 0]} activeBar={<Rectangle fill="000000" stroke="0" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}