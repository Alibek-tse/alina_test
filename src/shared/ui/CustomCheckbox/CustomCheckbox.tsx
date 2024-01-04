import { Checkbox, FormControlLabel } from '@mui/material';
import { ReactComponent as LogoChecked } from '@/assets/icon/checked.svg';
import { ReactComponent as LogoUnchecked } from '@/assets/icon/unchecked.svg';
import { useThemeFonts } from '@/hooks/useThemeFonts';

interface CustomCheckboxProps {
  checked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: boolean) => void;
  label?: string;
  sx?: any;
  isLabelRight?: boolean;
  disabled?: boolean;
  mt?: string;
}

/**
 * CustomCheckbox - компонент для отображения кастомного чекбокса
 * @param {boolean} checked - состояние чекбокса
 * @param {() => void} onChange - функция для изменения состояния чекбокса
 * @returns {JSX.Element} Компонент кастомного чекбокса
 * @example
 * <CustomCheckbox checked={checked} onChange={onChange} />
 */

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
  sx,
  isLabelRight = false,
  disabled = false,
  mt = '0px'
}) => {
  const { bodyM } = useThemeFonts();
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  const style = sx
    ? sx
    : { ...bodyM, m: 0, '.MuiFormControlLabel-label': { ...bodyM, pl: '5px', fontWeight: 400 }, mt: mt };
    
  return (
    <FormControlLabel
      sx={style}
      control={
        <Checkbox
          sx={{ padding: '0px' }}
          icon={<LogoUnchecked style={{ width: '20px', height: '20px' }} />}
          checkedIcon={<LogoChecked style={{ width: '20px', height: '20px' }} />}
          checked={checked}
          onChange={handleCheckboxChange}
          disabled={disabled}
        />
      }
      label={label || ''}
      labelPlacement={isLabelRight ? 'start' : 'end'}
    />
  );
};
