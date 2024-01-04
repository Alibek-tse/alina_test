import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  radioClasses,
  Stack,
  InputLabel,
} from '@mui/material';
import styled from '@emotion/styled';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useThemeFonts } from '@/hooks/useThemeFonts';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
  checked?: boolean;
}

interface RadioButtonProps {
  options: RadioOption[];
  //eslint-disable-next-line
  onChange: (value: string) => void;
  value: string;
  spacing?: number;
  isHorizontal?: boolean;
  margin?: string;
  title?: string;
}

/**
 * * CustomRadioButton - Компонент раиоднокнопок
 * @param onChange - Обработчик переключения кнопки
 * @param selectedValue - Выбранное значение
 * @param options - Массив с вариантами кнопок принимает значения value=required, label=required, disabled=optioonal, checked=optional
 */
export const CustomRadioGroup: React.FC<RadioButtonProps> = ({
  options,
  onChange,
  value,
  spacing,
  isHorizontal = false,
  margin = '0px',
  title,
}) => {
  const { darkBlue } = useThemeColors();
  const { bodyM, bodyS } = useThemeFonts();

  const ColoredRadio = styled(Radio)(() => ({
    [`&.${radioClasses.checked}.${radioClasses.disabled}`]: {
      color: darkBlue,
    },
  }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value);
  };

  return (
    <Stack direction={'column'} sx={{ width: '100%', m: margin }}>
      {title && (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        {title && <InputLabel sx={{ ...bodyM, fontWeight: 400, color: 'black' }}>{title}</InputLabel>}
      </Stack>
      )}
      <FormControl>
        <RadioGroup
          value={value}
          onChange={handleChange}
          row={isHorizontal}
          sx={{
            '& .MuiRadio-root:hover': {
              color: darkBlue,
            },
            flexDirection: isHorizontal ? 'row' : 'column',
            '& .MuiFormControlLabel-label': {
              fontSize: bodyM,
            },
            '& .MuiFormControlLabel-root:not(:last-child)': {
              marginBottom: theme => (isHorizontal ? 0 : spacing || theme.spacing(1)),
              marginRight: isHorizontal ? theme => theme.spacing(2) : 0,
            },
            '& .MuiFormControlLabel-root': {
              textAlign: isHorizontal ? 'center' : 'left',
            },
          }}
        >
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<ColoredRadio />}
              label={option.label}
              disabled={option.disabled}
              checked={option.checked}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};
