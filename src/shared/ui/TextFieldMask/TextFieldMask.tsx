import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, Stack } from '@mui/material';
import styled from '@emotion/styled';
import InputMask from 'react-input-mask';
import { useThemeFonts } from '@/hooks/useThemeFonts'; // Убедитесь, что этот хук существует
import { ReactComponent as TengeLogo } from '@/assets/icon/iconTenge.svg'; // Замените на свой компонент иконки, если необходимо

// Стилизация TextField
const StyledCustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    height: '20px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
    position: 'relative',
    bottom: '-1px',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    paddingLeft: '0',
    paddingRight: '0',
    '&.Mui-disabled': {
      paddingRight: '0',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    fontSize: '16px',
    lineHeight: '18px',
    color: '#969696',
  },
}));

type CustomTextFieldProps = {
  title?: string;
  mt?: string;
  width?: string;
  onChange: (value: string) => void;
  value: string | null;
  placeholder?: string;
  disabled?: boolean;
  showWarning?: boolean;
  titleFontWeight?: number;
  isNumber?: boolean;
  maxLength?: number | null;
  isSearch?: boolean;
  mask?: string;
};

const MaskedInput = (props: any) => {
  const { inputRef, ...other } = props;
  return <InputMask ref={inputRef} {...other} mask={props.mask} />;
};

export const TextFieldMask: React.FC<CustomTextFieldProps> = ({
  value,
  onChange,
  title,
  mt,
  width,
  placeholder = '',
  disabled = false,
  showWarning = false,
  titleFontWeight = 400,
  maxLength = null,
  isNumber = false,
  isSearch = false,
  mask = '',
}) => {
  const { bodyM, notes } = useThemeFonts();
  const [inputValue, setInputValue] = useState<string | null>(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (isNumber) {
      inputValue = inputValue.replace(/[^\d]/g, '');
    }

    if (maxLength && inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }

    setInputValue(inputValue);
    onChange(inputValue);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <Stack direction={'column'} sx={{ mt: mt || '0px', width: width || '100%' }}>
      {title && (
        <InputLabel sx={{ ...bodyM, fontWeight: titleFontWeight, color: 'black' }}>{title}</InputLabel>
      )}
      <StyledCustomTextField
        variant={'standard'}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        error={showWarning}
        InputProps={{
          inputComponent: mask ? MaskedInput : undefined, // Применяем маску, если она есть
          inputProps: {
            mask: mask,
          },
          disableUnderline: true,
          autoComplete: 'off',
        }}
      />
      {showWarning && (
        <InputLabel sx={{ ...notes, fontWeight: 400, color: 'red', pt: '2px' }}>
          {'обязательное поле'}
        </InputLabel>
      )}
    </Stack>
  );
};
