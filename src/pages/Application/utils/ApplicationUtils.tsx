import { Box, IconButton, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ReactComponent as LogoEdit } from '@/assets/icon/editIcon.svg';
import { ReactComponent as LogoDelete } from '@/assets/icon/deleteIcon.svg';
import styled from '@emotion/styled';
import { transformDateToString } from '@/helpers/helper';
import { CityEnum } from '@/enum/CityEnum';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDeleteApplicationMutation } from '@/redux/ApplicationApi/ApplicationApi';

export const useApplicationColumns = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [deleteApplication] = useDeleteApplicationMutation()

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 10,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => <Box component={'span'}>{params.row?.id}</Box>,
    },

    {
      field: 'name',
      headerName: 'ФИО',
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        return <Box component={'span'}>{params.row?.name ?? '-'}</Box>;
      },
    },

    {
      field: 'number',
      headerName: 'Номер телефона',
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        return <Box component={'span'}>{params.row?.number ?? '-'}</Box>;
      },
    },

    {
      field: 'type',
      headerName: 'Статус',
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        const type = params.row?.applicationType === 'classic' ? 'Класический' : 'Стандартный';
        return <Box component={'span'}>{type ?? '-'}</Box>;
      },
    },

    {
      field: 'date',
      headerName: 'Дата',
      sortable: false,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        const date = transformDateToString(params.row?.date);
        return <Box component={'span'}>{date ?? '-'}</Box>;
      },
    },
    {
      field: 'count',
      headerName: 'Кол-во',
      sortable: false,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        return <Box component={'span'}>{params.row?.applicantsNumber ?? '-'}</Box>;
      },
    },
    {
      field: 'city',
      headerName: 'Город',
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        return <Box component={'span'}>{CityEnum[params.row?.city as keyof typeof CityEnum] ?? '-'}</Box>;
      },
    },
    {
      field: 'call',
      headerName: 'Звонок',
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        const isCall = params.row?.isCall === 'Yes' ? 'Да' : 'Нет';
        return <Box component={'span'}>{isCall ?? '-'}</Box>;
      },
    },
    {
      field: 'edit',
      headerName: '',
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%' }}>
            <IconButton onClick={() => navigate(`${location.pathname}-edit/${params.row?.id}`)}>
              <LogoEdit />
            </IconButton>
          </Stack>
        );
      },
    },
    {
      field: 'delete',
      headerName: '',
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%' }}>
            <IconButton onClick={() => deleteApplication({id: params.row?.id})}>
              <LogoDelete />
            </IconButton>
          </Stack>
        );
      },
    },
  ];
  return columns;
};

export const DataGridStyle = styled(DataGrid)(({ theme }) => ({
  // Сброс бордеров по умолчанию
  border: 'none',
  '& .MuiDataGrid-main': {
    border: 'none',
  },

  // Стили для шапки таблицы
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'white', // Голубой фон шапки
    borderRadius: '0px',
  },
  '.MuiDataGrid-columnHeader': {
    //   borderRight: '1px solid #ccc', // Добавляем вертикальный бордер справа для каждого заголовка
    color: '#233D82',
  },
  // Убираем дефолтные разделители MUI
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
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
}));
