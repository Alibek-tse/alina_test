import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import { useThemeColors } from '@/hooks/useThemeColors';

interface CustomButtonProps extends ButtonProps {
  title: string;
  variant: 'contained' | 'text' | 'outlined';
  p?: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({ onClick, title, variant, p = '14px 50px', ...props }) => {
  const { bodyM } = useThemeFonts();
  const { darkBlue, white, mainBackground } = useThemeColors();

  return (
    <Button
      sx={{
        ...bodyM,
        backgroundColor: variant === 'contained' ? darkBlue : variant === 'text' ? white : mainBackground,
        p: p,
        borderRadius: '8px',
        border:
          variant === 'contained'
            ? 'none'
            : variant === 'text'
            ? '2px solid #969696'
            : `2px solid ${darkBlue}`,
        color: variant === 'contained' ? white : variant === 'text' ? '#969696' : 'black',
        '&:hover': {
          backgroundColor: variant === 'contained' ? '#1A3A7A' : '#F0F0F0',
        },
      }}
      onClick={onClick}
      {...props}
    >
      {title}
    </Button>
  );
};
