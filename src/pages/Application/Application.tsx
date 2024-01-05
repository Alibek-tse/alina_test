import { transformApplicationsToTableData } from '@/helpers/helper';
import { useGetApplicationsQuery } from '@/redux/ApplicationApi/ApplicationApi';
import MainContainer from '@/shared/ui/MainContainer';
import { DataGridStyle, columns } from './utils/ApplicationUtils';
import { Box } from '@mui/material';
import { CustomPagination } from './components/CustomPagination';
import { useState } from 'react';

export const Application = () => {
  const { data = [] } = useGetApplicationsQuery();
  const tableData = transformApplicationsToTableData(data, 20, 1);
  const [currentPage, setCurrentPage] = useState(0); // Текущая страница начинается с 0

  console.log('data: ', tableData);

  const totalItems = tableData?.content?.length;
  
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <MainContainer>
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
                currentPage={tableData?.currentPage}
                totalItems={totalItems}
                totalPages={tableData?.totalPages ?? 0}
                onChangePage={handlePageChange}
              />
            ),
          }}
        />
      </Box>
    </MainContainer>
  );
};
