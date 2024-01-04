import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { GraphicTooltip } from './GraphicTooltip';
import { MoneyType } from '@/types/MoneyType';

interface GraphicType {
    data: MoneyType[]
}

export const Graphic:React.FC<GraphicType> = ({data}) => {

  return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBuy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSell" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={(props: TooltipProps<number, string>) => <GraphicTooltip {...props} />} />
          <Area type="monotone" dataKey="buy" stroke="#8884d8" fillOpacity={1} fill="url(#colorBuy)" />
          <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorSell)" />
        </AreaChart>
      </ResponsiveContainer>
  );
};