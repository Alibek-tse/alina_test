import { useGetMoneyQuery } from '@/redux/ApplicationApi/ApplicationApi';
import { Graphic } from './components/Graphic';
import { Stack, Typography } from '@mui/material';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import MainContainer from '@/shared/ui/MainContainer';
import CustomSelect from '@/shared/ui/CustomSelect';
import { useState } from 'react';
import { OptionType } from '@/types/OptionType';
import { CustomBarChart } from './components/CustomBarChart';
import { CustomBarChartQuarter } from './components/CustomBarChartQuarter';
import { CustomBarChartRadial } from './components/CustomBarChartRadial';

const options = [
  { value: 'dollar', name: 'Доллар' },
  { value: 'dinar', name: 'Динар' },
];

export const Dashboard = () => {
  const [moneyState, setMoneyState] = useState<OptionType | null>(options[0]);
  const { data: rawData = [], isLoading } = useGetMoneyQuery(moneyState?.value || null);
  const data = Array.isArray(rawData) ? rawData : [];

  const { h5 } = useThemeFonts();

  const handleSelectChange = (value: string) => {
    // Обновляем состояние при выборе валюты
    const selectedOption = options.find(option => option.value === value);
    if (selectedOption) {
      setMoneyState(selectedOption);
    }
  };

  return (
    <MainContainer>
      <Stack direction={'column'} spacing={2}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography sx={{ ...h5 }}>График курса валют</Typography>
          <CustomSelect
            options={options}
            onChange={(value: string) => handleSelectChange(value)}
            value={moneyState?.value}
          />
        </Stack>
        <Graphic data={data} />
        <Stack direction={'row'} spacing={5} alignItems={'flex-start'}>
        <CustomBarChart />  
        <CustomBarChartQuarter />
        <CustomBarChartRadial />
        </Stack>
      </Stack>
    </MainContainer>
  );
};
