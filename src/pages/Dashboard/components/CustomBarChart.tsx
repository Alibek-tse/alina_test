import { useThemeColors } from '@/hooks/useThemeColors';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import CustomSelect from '@/shared/ui/CustomSelect';
import { Stack, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Алматы', value: 16 },
  { name: 'Астана', value: 12 },
  { name: 'Караганда', value: 10 },
  { name: 'Атырау', value: 8 },
  { name: 'Актобе', value: 3 },
  { name: 'Актау', value: 16 },
  { name: 'Кызылорда', value: 2 },
  { name: 'Шымкент', value: 10 },
];

export const CustomBarChart = () => {
  const { darkBlue } = useThemeColors();
  const { h5 } = useThemeFonts();
  return (
    <Stack direction={'column'} spacing={1} sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography sx={{ ...h5, pt: 1 }}>График курса валют</Typography>
        <CustomSelect
          options={[{ value: 'year', name: 'За год' }]}
          onChange={(value: string) => console.log(value)}
          value={'year'}
        />
      </Stack>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 17, // Увеличиваем левый отступ
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={value => (value === 0 ? value : `${value} млн`)} />
          <YAxis type="category" dataKey="name" width={80} />
          <Tooltip />
          <Bar dataKey="value" fill={darkBlue} radius={[0, 5, 5, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Stack>
  );
};
