import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useThemeFonts } from '@/hooks/useThemeFonts';

interface CustomButtonProps extends ButtonProps {
  title: string;
  iconPosition?: 'start' | 'end' | 'none';
  logo?: React.ReactNode;
  fontWeight?: number
  buttonColor?: string 
  border?: string
  borderRadius?: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  title,
  iconPosition = 'none',
  logo,
  fontWeight = 900,
  buttonColor = 'black',
  border ='none', 
  borderRadius = 'none',
  
  ...props
}) => {
  const { bodyS, bodyL } = useThemeFonts();

  return (
    <Button
      sx={{
        ...bodyL,
        borderRadius: borderRadius,
        color: buttonColor,
        fontWeight: fontWeight,
        boxShadow: 'none',
        textTransform: 'none',
        border: border 
      }}
      onClick={onClick}
      {...props}
      endIcon={iconPosition === 'end' ? logo : null}
      startIcon={iconPosition === 'start' ? logo : null}
    >
      {title}
    </Button>
  );
};
