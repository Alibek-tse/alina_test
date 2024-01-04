import { useThemeFonts } from '@/hooks/useThemeFonts';
import { InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { ReactComponent as LogoSelect } from '@/assets/icon/selectIcon.svg';
import { ReactComponent as LogoSelectApplication } from '@/assets/icon/arrowSelectForm.svg';

interface CustomSelectProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (value: any) => void;
  title?: string;
  placeholder?: string;
  value?: any;
  mt?: string;
  disabled?: boolean;
  showWarning?: boolean;
  options: any[];
  applicationType?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  onChange,
  title,
  placeholder,
  value,
  mt = '0px',
  disabled = false,
  showWarning = false,
  options = [],
  applicationType = false,
}) => {
  const { bodyM } = useThemeFonts();

  return (
    <Stack direction="column" sx={{ mt: mt || '0px' }}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        {title && <InputLabel sx={{ ...bodyM, fontWeight: 400, color: 'black' }}>{title}</InputLabel>}
      </Stack>
      <Select
        value={value}
        disabled={disabled}
        placeholder={placeholder && placeholder}
        onChange={(e: any) => onChange(e.target.value)}
        sx={{
          height: '40px',
          boxShadow: 'none',
          '& .MuiSelect-select': {
            position: 'relative',
            paddingRight: applicationType ? '32px' : '12px',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 7,
              left: 0,
              right: applicationType ? '32px' : '0', // Размер иконки стрелки
              borderBottom: applicationType ? '1px solid #969696' : 'none', // Красная граница
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            borderRadius: '0px'
          },
          '& .MuiSelect-icon': {
            color: 'black',
          },
        }}
        disableUnderline
        IconComponent={applicationType ? LogoSelectApplication : LogoSelect}
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
