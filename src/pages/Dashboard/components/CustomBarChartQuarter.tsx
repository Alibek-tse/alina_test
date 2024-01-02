import { useThemeColors } from '@/hooks/useThemeColors';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import CustomSelect from '@/shared/ui/CustomSelect';
import { Stack, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { quarter: 'КВ. I', закрытые: 345, новые: 420, текущие: 280 },
  { quarter: 'КВ. II', закрытые: 300, новые: 398, текущие: 200 },
  { quarter: 'КВ. III', закрытые: 200, новые: 278, текущие: 190 },
  { quarter: 'КВ. IV', закрытые: 278, новые: 390, текущие: 230 },
];

export const CustomBarChartQuarter = () => {
  const { h5 } = useThemeFonts();
  const { redGraphic, blueGraphic, yellowGraphic } = useThemeColors();
  return (
    <Stack direction={'column'} spacing={1} sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography sx={{ ...h5, pt: 1 }}>Статистика заявок</Typography>
        <CustomSelect
          options={[{ value: 'year', name: 'За год' }]}
          onChange={(value: string) => console.log(value)}
          value={'year'}
        />
      </Stack>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend wrapperStyle={{ justifyContent: 'space-between', width: '100%' }} />
          <Bar dataKey="закрытые" fill={redGraphic} radius={[5, 5, 0, 0]} />
          <Bar dataKey="новые" fill={blueGraphic} radius={[5, 5, 0, 0]} />
          <Bar dataKey="текущие" fill={yellowGraphic} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Stack>
  );
};
