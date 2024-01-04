import React, { useState } from 'react';
import { TextField, Stack, InputLabel, IconButton } from '@mui/material';
import { ReactComponent as LogoUp } from '@/assets/icon/arrowUpSelectForm.svg';
import { ReactComponent as LogoDown } from '@/assets/icon/arrowSelectForm.svg';
import styled from '@emotion/styled';
import { useThemeFonts } from '@/hooks/useThemeFonts';

const StyledTextField = styled(TextField)({
  // Ваши стили...
});

interface CustomCounterType {
  count: number;
  incrementCount: (value: any) => void;
  dicrementCount: (value: any) => void;
}

export const CustomCounter: React.FC<CustomCounterType> = ({ count, incrementCount, dicrementCount }) => {
  const { bodyM } = useThemeFonts();

  return (
    <Stack direction={'column'}>
      <InputLabel sx={{ ...bodyM, fontWeight: 400, color: 'black' }}>Количество заявителей</InputLabel>
      <Stack direction={'row'} spacing={1} alignItems={'end'} sx={{ height: '42px' }}>
        <StyledTextField
          variant="standard"
          value={count}
          disabled // Поле отключено для ручного ввода
        />
        <Stack direction={'column'}>
          <IconButton onClick={incrementCount} sx={{ p: 0 }}>
            <LogoUp />
          </IconButton>
          <IconButton onClick={dicrementCount} disabled={count <= 1} sx={{ p: 0 }}>
            <LogoDown />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
