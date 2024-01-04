import { TextField, Stack, InputLabel } from '@mui/material';
import styled from '@emotion/styled';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import { ReactComponent as TengeLogo } from '@/assets/icon/iconTenge.svg';
import { useEffect, useState } from 'react';

const StyledCustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    height: '30px',
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

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
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
}) => {
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
        variant="standard"
        disabled={disabled}
        placeholder={placeholder}
        name="custom-field"
        id="custom-field"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        InputProps={{
          disableUnderline: true,
          autoComplete: 'off',
          endAdornment: isNumber ? <TengeLogo /> : null,
        }}
      />
      {showWarning && <InputLabel sx={{ fontWeight: 400, color: 'red' }}>{'error message'}</InputLabel>}
    </Stack>
  );
};
