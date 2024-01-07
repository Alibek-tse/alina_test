import React, { useState } from 'react';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { ReactComponent as ArrowLeft } from '@/assets/icon/arrowLeftIcon.svg';
import { ReactComponent as ArrowRight } from '@/assets/icon/arrowRightIcon.svg';
import CustomTextField from '@/shared/ui/CustomTextField';
import CustomButton from '@/shared/ui/CustomButton';
import { useThemeFonts } from '@/hooks/useThemeFonts';

interface CustomPaginationProps {
  currentPage: number;
  totalItems: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  totalElements: number;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalItems,
  setCurrentPage,
  totalPages,
  isFirstPage,
  isLastPage,
  totalElements,
}) => {
  const [goToPageState, setGoToPageState] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const iconButtonStyle = {
    padding: '6px',
    borderRadius: '8px',
    '&.Mui-disabled': {
      backgroundColor: '#E0E3E7', // Задаем цвет фона для отключенной кнопки
    },
  };
  const { notes } = useThemeFonts();

  const changeCurrentPage = () => {
    const page = Number(goToPageState);
    if (page && goToPageState) {
      if (page <= totalPages && page >= 1) {
        setCurrentPage(Number(goToPageState) + 1);
      } else {
        setShowWarning(true);
      }
    } else {
      setShowWarning(true);
    }
  };

  return (
    <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={3}>
        <IconButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={isFirstPage}
          sx={{
            ...iconButtonStyle,
          }}
        >
          <ArrowLeft />
        </IconButton>
        <Box>{`${currentPage - 1} / ${totalElements}`}</Box>
        <IconButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={isLastPage}
          sx={{
            ...iconButtonStyle,
          }}
        >
          <ArrowRight />
        </IconButton>
      </Stack>

      <Stack direction={'column'} alignItems={'flex-end'}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={2}>
          <Box component={'span'}>Перейти на страницу</Box>
          <CustomTextField
            value={goToPageState}
            onChange={value => {
              setGoToPageState(value);
              setShowWarning(false);
            }}
            width="10%"
          />
          <CustomButton onClick={changeCurrentPage} title="Перейти" variant="outlined" p="7px 14px" />
        </Stack>
        {showWarning && (
          <Typography sx={{ ...notes, color: 'red', pt: '1px' }}>введите корректное знаечение</Typography>
        )}
      </Stack>
    </Stack>
  );
};
