import { TextField, Stack, InputLabel } from '@mui/material';
import styled from '@emotion/styled';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import { ReactComponent as SearchLogo } from '@/assets/icon/searchLogo.svg';
import { useEffect, useState } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';

type CustomTextFieldProps = {
  title?: string;
  mt?: string;
  width?: string;
  //eslint-disable-next-line no-unused-vars
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

const StyledCustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    borderRadius: '15px',
    backgroundColor: '#E9F5FF',
    border: '1px solid #2B2B2B',
  },
  '& .MuiInputBase-input': {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    paddingLeft: '0',
    paddingRight: '0',
    borderRadius: '15px',
    padding: '12px',
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

export const TextFieldSearch: React.FC<CustomTextFieldProps> = ({
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
}) => {
  const { mainBackground, white } = useThemeColors();
  const { bodyM } = useThemeFonts();
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Очищаем ввод от всех нечисловых символов, если isNumber установлен в true
    if (isNumber) {
      inputValue = inputValue.replace(/[^\d]/g, '');
    }

    if (maxLength && inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength); // Обрезать текст, если он превышает maxLength
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
        value={inputValue}
        disabled={disabled}
        placeholder={placeholder}
        name="custom-field"
        id="custom-field"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        InputProps={{
          endAdornment: <SearchLogo />,
        }}
      />
      {showWarning && <InputLabel sx={{ fontWeight: 400, color: 'red' }}>{'error message'}</InputLabel>}
    </Stack>
  );
};
