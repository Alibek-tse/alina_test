import { useState } from 'react';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import { InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { ReactComponent as LogoSelect } from '@/assets/icon/selectIcon.svg';

interface CustomSelectProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (value: any) => void;
  title?: string;
  placeholder?: string;
  value?: any;
  api?: string | null;
  mt?: string;
  disabled?: boolean;
  showWarning?: boolean;
  options: any[];
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  onChange,
  title,
  placeholder,
  value,
  api = null,
  mt = '0px',
  disabled = false,
  showWarning = false,
  options = [],
}) => {
  const [age, setAge] = useState('');
  const { bodyS } = useThemeFonts();

  const menuPropsStyle = {
    '& .MuiSelect-select': {
      paddingLeft: '12px',
      paddingRight: '30px',
      backgroundColor: 'white',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      '&:focus': {
        backgroundColor: 'white',
      },
    },

    '& .MuiSelect-icon': {
      color: 'black',
    },

    '& .MuiInputLabel-root': {
      color: 'black',
      fontSize: '0.875rem',
    },
  };

  return (
    <Stack direction="column" spacing={'8px'} sx={{ mt: mt || '0px' }}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        {title && <InputLabel sx={{ ...bodyS, fontWeight: 400, color: 'black' }}>{title}</InputLabel>}
      </Stack>
      <Select
        value={value}
        // label={title}
        placeholder={placeholder && placeholder}
        onChange={(e: any) => onChange(e.target.value)}
        MenuProps={{
          sx: { ...menuPropsStyle } as any,
        }}
        sx={{
          height: '40px',
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
        }}
        disableUnderline
        IconComponent={LogoSelect}
      >
        {options?.map((i: any) => (
          <MenuItem key={i?.value} value={i?.value}>
            {i?.name}
          </MenuItem>
        ))}
      </Select>
      {/* {showWarning && !inputValue && (
        <InputLabel sx={{ ...labelM, fontWeight: 400, color: errorMain }}>{'Выберите значения'}</InputLabel>
      )} */}
    </Stack>
  );
};
