import { FC } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {Typography} from "antd";
import type {IChartData} from "../interfaces/stock.interface";
const { Title } = Typography;
interface IChart {
  chartData: IChartData[];
}
export const Chart: FC<IChart> = ({chartData}) => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#97beef' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#97beef' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={'Date'} axisLine={true} tickLine={true} tickMargin={5} fontSize={12} />
          <YAxis
            dataKey='Close'
            domain={['dataMin', 'dataMax']}
            tickCount={5}
            tickMargin={5}
            allowDecimals={true}
            fontSize={13}
          />
          <Tooltip />
          <Area type='monotone' dataKey='Close' stroke='#419bf9' fillOpacity={1} fill='url(#colorUv)' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
