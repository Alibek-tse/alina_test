import React from 'react';
import { Box, Button, IconButton, Stack } from '@mui/material';
// import { ReactComponent as LogoRight } from '@/assets/icon/arrowRight.svg';
// import { ReactComponent as LogoLeft } from '@/assets/icon/arrowLeft.svg';

interface CustomPaginationProps {
  currentPage: number;
  totalItems: number;
  onChangePage: (page: number) => void;
  totalPages: number
}


export const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalItems,
  onChangePage,
  totalPages
}) => {

  const buttonStyle = {
    padding: '6px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    minWidth: '40px',
    color: 'inherit',
    '&.Mui-disabled': {
      color: 'black',
    },
  };

  const iconButtonStyle = {
    padding: '6px',
    borderRadius: '8px',
    border: '1px solid #DFE3E8',
    '&.Mui-disabled': {
      backgroundColor: '#E0E3E7', // Задаем цвет фона для отключенной кнопки
    },
  };

  // Функция для генерации списка номеров страниц
  const renderPageNumbers = () => {
    const pages = [];
    const shouldHighlightEllipsis = currentPage > 2 && currentPage < totalPages - 1;
    // Добавляем первые две страницы
    for (let i = 0; i <= 1; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => onChangePage(i)}
          disabled={currentPage === i}
          sx={{
            ...buttonStyle,
            border: currentPage === i ? '1px solid #4200FF' : '1px solid #ccc', // Обновлённый стиль границы
          }}
        >
          {`${i + 1}`}
        </Button>
      );
    }

    // Добавляем многоточие, если текущая страница больше четвертой
    if (currentPage > 3) {
      pages.push(
        <Button
          key="left-ellipsis"
          disabled={true}
          sx={{
            ...buttonStyle,
            border: shouldHighlightEllipsis ? '1px solid #4200FF' : '1px solid #ccc',
          }}
        >
          {'...'}
        </Button>
      );
    }

    // Если страниц больше четырех, добавляем кнопки для последних двух страниц
    if (totalPages > 4) {
      for (let i = totalPages - 1; i <= totalPages; i++) {
        pages.push(
          <Button
            key={i}
            onClick={() => onChangePage(i)}
            disabled={currentPage === i}
            sx={{
              ...buttonStyle,
              border: currentPage === i ? '1px solid #4200FF' : '1px solid #ccc', // Обновлённый стиль границы
            }}
          >
            {i + 1}
          </Button>
        );
      }
    }

    // Добавляем многоточие, если текущая страница меньше чем на три страницы от конца
    if (currentPage < totalPages - 4) {
      pages.splice(
        pages.length - 2,
        0,
        <Button
          key="left-ellipsis1"
          sx={{
            ...buttonStyle,
            border: shouldHighlightEllipsis ? '1px solid #4200FF' : '1px solid #ccc',
          }}
        >
          {'...'}
        </Button>
      );
    }

    return pages;
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      onChangePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onChangePage(currentPage + 1);
    }
  };

  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ width: '100%' }}
      spacing={1}
    >
      {/* Кнопка "Первая страница" */}
      <IconButton
        onClick={handlePrev}
        disabled={currentPage === 0}
        sx={{
          ...iconButtonStyle,
        }}
      >
        {/* <LogoLeft style={{ fill: '#C4CDD5' }} /> */}
        sd
      </IconButton>
      {renderPageNumbers()}
      {/* Кнопка "Последняя страница" */}
      <IconButton
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        sx={{
          ...iconButtonStyle,
        }}
      >
        {/* <LogoRight style={{ fill: currentPage !== 0 ? '#C4CDD5' : '#ccc' }} /> */}
    e
      </IconButton>
    </Stack>
  );
};
