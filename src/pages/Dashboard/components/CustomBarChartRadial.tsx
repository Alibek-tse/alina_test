import { useThemeColors } from '@/hooks/useThemeColors';
import { Stack, Typography } from '@mui/material';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { ReactComponent as ArrowUpLogo } from '@/assets/icon/arrowUp.svg';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import CustomSelect from '@/shared/ui/CustomSelect';

export const CustomBarChartRadial = () => {
  const { green, darkBlue } = useThemeColors();
  const { bodyS, h5 } = useThemeFonts();
  const data = [
    {
      name: '63%',
      value: 63,
      fill: darkBlue,
    },
  ];

  return (
    <Stack direction={'column'} spacing={1} sx={{ width: '70%' }}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography sx={{ ...h5, pt: 1 }}>KPI</Typography>
        <CustomSelect
          options={[{ value: 'year', name: 'За год' }]}
          onChange={(value: string) => console.log(value)}
          value={'year'}
        />
      </Stack>
      <Stack direction={'column'} sx={{ width: '100%' }} justifyContent={'center'} alignItems={'center'}>
        <ResponsiveContainer width="100%" height={250}>
          <RadialBarChart innerRadius="75%" outerRadius="100%" data={data} startAngle={90} endAngle={450}>
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar background dataKey="value" cornerRadius={10} fill={darkBlue} />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: '30px', fontWeight: 'bold', fill: darkBlue }} // Customize font size and weight here
            >
              {data[0].name}
            </text>
            <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" style={{ fill: green }}>
              ▲ 2%
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
        <Stack direction={'row'} justifyContent={'center'} spacing={1}>
          <ArrowUpLogo style={{ fill: green }} />
          <Typography sx={{ ...bodyS }}>прирост за день</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
