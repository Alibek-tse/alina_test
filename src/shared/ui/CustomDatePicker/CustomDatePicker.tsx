import * as React from 'react';
import { InputLabel, Stack, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU } from '@mui/x-date-pickers/locales';
import { ru } from 'date-fns/locale';
import { useThemeFonts } from '@/hooks/useThemeFonts';

interface CustomDatePickerType {
  value: Date | null;
  onChange: (value: any) => void;
}

const theme = createTheme({});

export const CustomDatePicker: React.FC<CustomDatePickerType> = ({ value, onChange }) => {
  const { bodyM } = useThemeFonts();

  return (
    <Stack direction={'column'}>
      <InputLabel sx={{ ...bodyM, fontWeight: 400, color: 'black', pl: 3 }}>Дата заявки</InputLabel>
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={ru}
          localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
        >
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={value}
            onChange={newValue => {
              onChange(newValue);
            }}
            // renderInput={(params: any) => <TextField {...params} />}
            // Настройте визуальные аспекты календаря с помощью props
          />
        </LocalizationProvider>
      </ThemeProvider>
    </Stack>
  );
};
