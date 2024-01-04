import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '@/pages/Header/index';
import Sidebar from '@/pages/Sidebar/index';
import { useThemeColors } from '@/hooks/useThemeColors';

export const MainPage = () => {
  const { mainBackground } = useThemeColors();
  return (
    <Stack direction={'row'} sx={{ width: '100%', minHeight: '100vh', backgroundColor: mainBackground }}>
      <Sidebar />
      <Box sx={{ width: '80%', p: 5 }}>
        <Header />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
};
