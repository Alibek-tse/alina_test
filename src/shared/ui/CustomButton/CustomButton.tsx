import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import { useThemeColors } from '@/hooks/useThemeColors';

interface CustomButtonProps extends ButtonProps {
  title: string;
  variant: 'contained' | 'text';
}

export const CustomButton: React.FC<CustomButtonProps> = ({ onClick, title, variant, ...props }) => {
  const { bodyM } = useThemeFonts();
  const { darkBlue, white, mainBackground } = useThemeColors();

  return (
    <Button
      sx={{
        ...bodyM,
        backgroundColor: variant === 'contained' ? darkBlue : white,
        p: '14px 50px',
        borderRadius: '8px',
        border: variant === 'contained' ? 'none' : '2px solid #969696',
        color: variant === 'contained' ? white : '#969696',
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
