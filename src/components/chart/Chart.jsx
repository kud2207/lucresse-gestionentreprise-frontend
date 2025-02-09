import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.scss';

const data = [
  { name: 'Jan', uv: 50, pv: 80 },
  { name: 'Feb', uv: 75, pv: 100 },
  { name: 'Mar', uv: 10, pv: 120 },
  { name: 'Apr', uv: 25, pv: 70 },
  { name: 'May', uv: 50, pv: 10 },
  { name: 'Jun', uv: 75, pv: 80 },
  { name: 'Jul', uv: 200, pv: 180 },
];

const ChartComponent = () => {
  return (
    <div className='chart'>
      <ResponsiveContainer width="100%" height={420}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff6384" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff6384" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#36a2eb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#36a2eb" stopOpacity={0} />
            </linearGradient>
            
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="bump" dataKey="uv" stroke="#ff6384" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#36a2eb" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
