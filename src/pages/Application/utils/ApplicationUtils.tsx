import { Box, IconButton, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ReactComponent as LogoEdit } from '@/assets/icon/edit.svg';
import { ReactComponent as LogoDelete } from '@/assets/icon/delete.svg';
import styled from '@emotion/styled';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 10,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => <Box component={'span'}>{params.row?.id}</Box>,
  },

//   {
//     field: 'templateCode',
//     headerName: 'Код шаблона',
//     flex: 1,
//     sortable: false,
//     renderCell: (params: GridRenderCellParams) => {
//       return <Box component={'span'}>{params.row?.code ?? '-'}</Box>;
//     },
//   },

//   {
//     field: 'templateName',
//     headerName: 'Имя шаблона',
//     flex: 1,
//     sortable: false,
//     renderCell: (params: GridRenderCellParams) => {
//       return <Box component={'span'}>{params.row?.name ?? '-'}</Box>;
//     },
//   },

//   {
//     field: 'status',
//     headerName: 'Статус',
//     flex: 1,
//     sortable: false,
//     renderCell: (params: GridRenderCellParams) => {
//       const status = params.row?.status ? 'Активный' : 'Не активный'
//       return <Box component={'span'}>{status?? '-'}</Box>;
//     },
//   },

//   {
//     field: 'edit',
//     headerName: 'Действие',
//     sortable: false,
//     width: 84,
//     align: 'right',
//     renderCell: (params: GridRenderCellParams) => {
//       return (
//         <Stack
//           direction={'row'}
//           justifyContent={'center'}
//           alignItems={'center'}
//           sx={{ width: '100%'}}
//         >
//           <IconButton>
//             <LogoEdit />
//           </IconButton>
//         </Stack>
//       );
//     },
//   },
//   {
//     field: 'delete',
//     headerName: 'Действие',
//     sortable: false,
//     width: 84,
//     align: 'right',
//     renderCell: (params: GridRenderCellParams) => {
//       return (
//         <Stack
//           direction={'row'}
//           justifyContent={'center'}
//           alignItems={'center'}
//           sx={{ width: '100%'}}
//         >
//           <IconButton>
//             <LogoDelete />
//           </IconButton>
//         </Stack>
//       );
//     },
//   },
];

export const DataGridStyle = styled(DataGrid)(({ theme }) => ({
  // Сброс бордеров по умолчанию
  border: 'none',
  '& .MuiDataGrid-main': {
    border: 'none',
  },

  // Стили для шапки таблицы
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'white', // Голубой фон шапки
    // borderRight: '1px solid #ccc',
    // borderLeft: '1px solid #ccc',
    // borderTop: '1px solid #ccc',
    borderRadius: '0px',
    '.MuiDataGrid-columnHeader:first-of-type': {
    //   borderLeft: '1px solid #ccc', // Убираем бордер с последнего заголовка
    },
    '.MuiDataGrid-columnHeader:last-child': {
    //   borderLeft: 'none', // Убираем бордер с последнего заголовка
    },

    '.MuiDataGrid-columnHeader': {
    //   borderRight: '1px solid #ccc', // Добавляем вертикальный бордер справа для каждого заголовка
    },
  },
  '.MuiDataGrid-columnHeader:last-child': {
    // border: '1px solid #ccc', // Убираем бордер с последнего заголовка
  },

  // Убираем дефолтные разделители MUI
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },

  // Стили для ячеек шапки
  // '& .MuiDataGrid-columnHeaderTitle': {
  //   fontWeight: 'bold', // Жирный текст в шапке
  // },

  // Стили для строк
  '& .MuiDataGrid-row': {
    // Чередование фона строк
    // '&:nth-of-type(2n)': {
    //   backgroundColor: '#f7f7f7', // Серый фон для четных строк
    // },
    // Границы для ячеек в строке
    '& .MuiDataGrid-cell': {
    //   borderRight: '1px solid #ccc', // Граница справа ячеек
    },
  },

  // Убираем бордер с последней ячейки, чтобы избежать двойной границы
  '& .MuiDataGrid-row .MuiDataGrid-cell:first-of-type': {
    // borderLeft: '1px solid #ccc',
  },

  // Границы вокруг всего DataGrid
  '& .MuiDataGrid-root': {
    border: '1px solid #ccc',
  },

  // Стили для футера, если он есть
  '& .MuiDataGrid-footerContainer': {
    border: 'none', // Граница сверху футера
  },
  '.MuiDataGrid-row:hover': {
    backgroundColor: '#eaebeb', // замените на желаемый цвет при наведении
  },
  // стиль для фиксированной высоты таблицы
  // height: containerHeight,
  // '& .MuiDataGrid-renderingZone': {
  //   maxHeight: `${containerHeight}px !important`,
  // },
  // ... Дополнительные стили, если нужно
}));