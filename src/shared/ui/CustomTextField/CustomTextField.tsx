import { TextField, Stack, InputLabel } from '@mui/material';
import styled from '@emotion/styled';
import { ReactComponent as LogoSearch } from '@/assets/icon/searchIcon.svg';
import { useThemeFonts } from '@/hooks/useThemeFonts';

const StyledCustomTextField = styled(TextField)(() => {
  return {
    width: '100%',
    '& .MuiInputBase-root': {
      height: '40px',
      borderRadius: '8px',
      backgroundColor: 'white',
    },
    '& .MuiInputBase-input': {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0px',
      fontWeight: 400,
      paddingLeft: '16px',
    },
    '& .MuiInputBase-input.Mui-disabled': {
      backgroundColor: '#ccc',
      WebkitTextFillColor: 'black',
      borderRadius: '8px',
      padding: '13px',
    },
    '& .MuiInputBase-input::placeholder': {
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '0px',
      color: 'black', // Здесь укажите нужный цвет
      // Добавьте другие стили для placeholder по вашему усмотрению
    },
  };
});

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
  isSearch = false,
  maxLength = null
}) => {
  const {bodyS} = useThemeFonts()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (maxLength && value?.length > maxLength) {
      value = value.slice(0, maxLength); // Обрезать текст, если он превышает maxLength
    }
    onChange(value);
  };

  return (
    <Stack direction={'column'} spacing={'8px'} sx={{ mt: mt || '0px', width: width || '100%' }}>
      {title && (
        <InputLabel sx={{ ...bodyS, fontWeight: titleFontWeight, color: 'black' }}>{title}</InputLabel>
      )}
      <StyledCustomTextField
        value={value ?? ''}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        InputProps={{
          endAdornment: isSearch && <LogoSearch />,
        }}
      />
      {showWarning && <InputLabel sx={{ fontWeight: 400, color: 'red' }}>{'error message'}</InputLabel>}
    </Stack>
  );
};
