import { transformApplicationsToTableData } from '@/helpers/helper';
import { useGetApplicationsQuery } from '@/redux/ApplicationApi/ApplicationApi';
import MainContainer from '@/shared/ui/MainContainer';
import { DataGridStyle, useApplicationColumns } from './utils/ApplicationUtils';
import { Box, IconButton, Stack } from '@mui/material';
import { CustomPagination } from './components/CustomPagination';
import { useState } from 'react';
import TextFieldSearch from '@/shared/ui/TextFieldSearch';
import { ReactComponent as SortLogo } from '@/assets/icon/sortIcon.svg';
import { ReactComponent as FilterLogo } from '@/assets/icon/filterIcon.svg';

export const Application = () => {
  const { data = [] } = useGetApplicationsQuery();
  const [currentPage, setCurrentPage] = useState<number>(1); // Текущая страница начинается с 0
  const tableData = transformApplicationsToTableData(data, 20, currentPage);
  const columns = useApplicationColumns()

  const totalItems = tableData?.content?.length;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage - 1); // Минус 1, потому что наша пагинация начинается с 0
  };

  return (
    <MainContainer>
      <Stack direction={'column'} spacing={4}>
        <Stack direction={'row'} sx={{ width: '100%' }} justifyContent={'space-between'}>
          <TextFieldSearch
            value={null}
            onChange={value => console.log(value)}
            isSearch
            placeholder="Поиск"
            width="60%"
          />
          <Stack direction={'row'} spacing={4}>
            <IconButton>
              <SortLogo />
            </IconButton>
            <IconButton>
              <FilterLogo />
            </IconButton>
          </Stack>
        </Stack>
        <Box sx={{ height: '125vh', display: 'grid' }}>
          <DataGridStyle
            rows={tableData?.content ?? []}
            columns={columns}
            rowCount={totalItems}
            disableColumnMenu
            disableColumnFilter
            disableDensitySelector
            disableRowSelectionOnClick
            slots={{
              pagination: () => (
                <CustomPagination
                  currentPage={currentPage + 1} // Плюс 1, потому что компонент ожидает номера страниц, начиная с 1
                  totalItems={tableData?.totalApplications ?? 0}
                  totalPages={tableData?.totalPages ?? 0}
                  setCurrentPage={newPage => handlePageChange(newPage)}
                  isFirstPage={tableData?.isFirstPage}
                  isLastPage={tableData?.isLastPage}
                  totalElements={tableData?.totalApplications}
                />
              ),
            }}
          />
        </Box>
      </Stack>
    </MainContainer>
  );
};
